import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params, Router } from "@angular/router";
import { catchError, map, Observable, throwError } from "rxjs";
import { IHTTPResponse } from "../models/response.interface";

import { AppSetting } from "./AppSetting";
import { ToasterService } from "./toaster.service";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  public errorMessage: string = "";
  url: string = AppSetting.API_ENDPOINT;
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  httpPostRequest(action: string, fd: Params): Observable<any> {
    let token = this.tokenService.get();
    const headers = new HttpHeaders();
    return this.http
      .post<IHTTPResponse>(this.url + action, fd, { headers })
      .pipe(
        map((data) => {
          return data
        }),
        catchError(this.handleError)
      );

  }

  httpFilePostRequest(action: string, fd: Params): Observable<any> {
    let token = this.tokenService.get();
    const headers = new HttpHeaders();
    return this.http
      .post<IHTTPResponse>(this.url + action, fd, { headers })
      .pipe(
        map((data) => {
          return data
        }),
        catchError(this.handleError)
      );

  }

  httpGetRequest(action: string, params: any): Observable<IHTTPResponse> {
    let token = this.tokenService.get();
    const headers = new HttpHeaders();
    return this.http
      .get<IHTTPResponse>(this.url + action, { params: params, headers })
      .pipe(catchError(this.handleError));
  }

  // httpPostDataRequest(action: string, param): Observable<IHTTPResponse> {
  //   // let p = {
  //   //   ClientName: "User",
  //   //   LastModifedUser: "rupesh.chanchal@wilsoncgrp.com",
  //   //   ComplianceId: 1019,
  //   //   TCriteriaId: "1",
  //   // };
  //   const headers = new HttpHeaders({
  //     "Access-Control-Allow-Origin": "http://localhost:4200",
  //     "Access-Control-Expose-Headers": "X-Custom-Header, Content-Encoding",
  //     "Content-Type": "application/json",
  //   });
  //   return this.http.post<IHTTPResponse>(this.url + action, param).pipe(
  //     //map((data) => data),
  //     catchError(this.handleError)
  //   );
  // }

  httpPutRequest(action: string, fd: FormData): Observable<any> {
    return this.http
      .put<IHTTPResponse>(this.url + action, fd)
      .pipe(catchError(this.handleError));
  }

  httpDeleteRequest(action: string, params): Observable<any> {
    let token = this.tokenService.get();
    const headers = new HttpHeaders();
    return this.http
      .delete<IHTTPResponse>(this.url + action, { params, headers })
      .pipe(catchError(this.handleError));
  }

  downloadArrayBufferFile(fileUrl: string) {
    return this.http.get<ArrayBuffer>(fileUrl, {
      responseType: "arraybuffer" as "json",
    });
  }

  httpGetBlobRequest(action: string, params: any) {
    // return this.http
    //   .get<IHTTPResponse>(this.url + action, { params: params, headers })
    //   .pipe(catchError(this.handleError));
    return this.http.get(this.url + action, {
      params: params,
      observe: "body",
      responseType: "blob" as "json",
    });
  }

  downloadBlobFile(fileUrl: string) {
    const headers = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      supports_credentials: "True",
    });
    return this.http.get(fileUrl, {
      observe: "body",
      responseType: "blob" as "json",
    });
  }

  displayTextFile(fileUrl: string) {
    return this.http.get(fileUrl);
  }

  private handleError = (error: HttpErrorResponse) => {
    let errorData: any = error;
    if (errorData.status === 500) {
      return this.handle500Error(errorData);
    } else if (errorData.status === 404) {
      return this.handle404Error(errorData);
    } else if (errorData.status === 524) {
      return this.handle524Error(errorData);
    } else if (errorData == "Unknown Error" || errorData == "OK") {
      return this.handle524Error(errorData);
    } else {
      return this.handleOtherError(errorData);
    }

  };

  private handle500Error = (error: HttpErrorResponse) => {
    return this.createErrorMessage(error);
    //this.router.navigate(['/500']);
  };

  private handle404Error = (error: HttpErrorResponse) => {
    this.tokenService.remove();
    // this.router.navigate(['/pages/auth/login-2']);
    return this.createErrorMessage(error);
  };

  private handle524Error = (error: HttpErrorResponse) => {
    return this.createErrorMessage524(error);
  };

  private handleOtherError = (error: HttpErrorResponse) => {
    return this.createErrorMessage(error);
    //TODO: this will be fixed later;
  };

  private createErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
    this.toasterService.error(error.error.message);
    return throwError(() => this.errorMessage);
  };

  private createErrorMessage524 = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error;
    return throwError(() => this.errorMessage);
  };
}
