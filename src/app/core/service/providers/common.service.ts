import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AppSetting } from "../AppSetting";
import { HttpService } from "../http.service";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private http: HttpService, private location: Location) {}

  getStatusColor(status) {
    let statusStyle = "";
    AppSetting.ALLSTATUS.forEach((element) => {
      if (element.name == status) {
        statusStyle = element.style;
      }
    });
    return statusStyle;
  }

  getSeverityForExtract(severity_id) {
    if (severity_id > 0 && severity_id < 4) {
      return "Medium";
    } else if (severity_id >= 4 && severity_id < 8) {
      return "High";
    } else if (severity_id >= 8) {
      return "Critical";
    }
  }
}
