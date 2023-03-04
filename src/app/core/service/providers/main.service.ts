import { Params } from "@angular/router";
import { Injectable } from "@angular/core";
import { AppSetting } from "../AppSetting";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class MainService {
  is_loading: boolean;
  constructor(private http: HttpService) { }

  getRequest(action, params): Promise<any> {
    this.is_loading = true;
    return new Promise((resolve) => {
      this.http.httpGetRequest(action, params).subscribe((data) => {
        this.is_loading = false;
        resolve(data);
      });
    });
  }

  getBlobRequest(action, params): Promise<any> {
    this.is_loading = true;
    return new Promise((resolve) => {
      this.http.httpGetBlobRequest(action, params).subscribe((data) => {
        this.is_loading = false;
        resolve(data);
      });
    });
  }
  filePostRequest(action, params): Promise<any> {
    this.is_loading = true;
    return new Promise((resolve, reject) => {
      this.http.httpFilePostRequest(action, params).subscribe((data: any) => {
        this.is_loading = false;
        resolve(data);
      },
        // function (error) {

        //   this.is_loading = false;
        //   reject(error);
        // }
      );
    });
  }

  postRequest(action, params): Promise<any> {
    this.is_loading = true;
    return new Promise((resolve, reject) => {
      this.http.httpPostRequest(action, params).subscribe((data: any) => {
        this.is_loading = false;
        resolve(data);
      },
        function (error) {

          this.is_loading = false;
          reject(error);
        }
      );
    });
  }

  deleteRequest(action, params): Promise<any> {
    this.is_loading = true;
    return new Promise((resolve) => {
      this.http.httpDeleteRequest(action, params).subscribe((data) => {
        this.is_loading = false;
        resolve(data);
      });
    });
  }
}
