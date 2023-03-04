import { Injectable } from "@angular/core";
import { AppSetting } from "../AppSetting";
import { MainService } from "./main.service";

@Injectable({
  providedIn: "root",
})
export class AssessmentService {
  constructor(public mainService: MainService) { }

  getComplianceDetails(params: { ComplianceTypeId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_COMPLIANCE;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: { Status: string };
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(jsonObj);
        } else if (AppSetting.APP_COSTANT.STATUS_400 == jsonObj.Status) {
          resolve(jsonObj);
        }
      });
    });
  }
  getComplianceDetailsbyId(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_COMPLIANCE_BY_ID;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        if (AppSetting.APP_COSTANT.STATUS_200 == data.Status) {
          resolve(data);
        }
      });
    });
  }
  getCriteriaByComplianceId(params: {
    CompId: any;
    complianceTypeId: number;
  }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_CRITERIA_BY_COMPLIANCE_ID;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        resolve(data);
      });
    });
  }
  getSubCriteria(params: { CriteriaId: any; ClientID: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_SUBCRITERIA;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: { Status: string };
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(jsonObj);
        }
      });
    });
  }
  getSubCriteriaByClient(params: { ClientId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_SUBCRITERIA_BY_CLIENT;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: { Status: string };
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(data);
        }
      });
    });
  }
  getControlActivity(params: { ComplianceId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_CONTROL_ACTIVITY;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: any;
        jsonObj = JSON.parse(data.Data);
        resolve(jsonObj);
      });
    });
  }

  getControlActivityByClient(params: {
    ClientId: any;
    SubCriteriaId?: any;
  }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_CONTROL_ACTIVITY_BY_CLIENT;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj = JSON.parse(data.Data);
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(jsonObj);
        }
      });
    });
  }

  getControlActivityBySubcriteriaId(params: {
    SubCriteriaId: any;
  }): Promise<any> {
    let action =
      AppSetting.API_ACTION.ACTION_GET_CONTROL_ACTIVITY_BY_SUBCRITERIA_ID;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: any;
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        resolve(jsonObj);
      });
    });
  }

  saveControlActivity(params: any[]): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_SAVE_CONTROL_ACTIVITY;
    return new Promise((resolve) => {
      this.mainService.postRequest(action, params).then((data) => {
        resolve(data);
      });
    });
  }

  exportExcel(params): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_EXPORT_EXCEL;
    return new Promise((resolve) => {
      this.mainService.getBlobRequest(action, params).then((data) => {
        resolve(data);
      });
    });
  }

  exportWord(params): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_EXPORT_WORD;
    return new Promise((resolve) => {
      this.mainService.getBlobRequest(action, params).then((data) => {
        resolve(data);
      });
    });
  }

  getClientByComplianceId(params: { ComplianceId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_GET_COMPLIANCE_BY_ID;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((data) => {
        let jsonObj: { Status: string; ClientList: any[] };
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(jsonObj);
        } else if (AppSetting.APP_COSTANT.STATUS_400 == jsonObj.Status) {
          jsonObj.ClientList = [];
          resolve(jsonObj);
        }
      });
    });
  }

  addCompliance(params: any[]): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_POST_COMPLIANCE;
    return new Promise((resolve, reject) => {
      this.mainService
        .postRequest(action, params)
        .then((data) => {
          resolve(data);
        })
        .catch(function (err) {
          reject(err);
        });
    });
  }

  saveClientDetail(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_POST_CLIENT;
    return new Promise((resolve) => {
      this.mainService.postRequest(action, params).then((data) => {
        let jsonObj: { Status: string; ClientList: any[] };
        if (typeof data.Data === "object") {
          jsonObj = data.Data;
        } else {
          jsonObj = JSON.parse(data.Data);
        }
        if (AppSetting.APP_COSTANT.STATUS_200 == jsonObj.Status) {
          resolve(jsonObj);
        } else if (AppSetting.APP_COSTANT.STATUS_400 == jsonObj.Status) {
          jsonObj.ClientList = [];
          resolve(jsonObj);
        }
      });
    });
  }

  deleteClientDetail(params: { ClientId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_REMOVE_CLIENT;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((response) => {
        resolve(response.Data);
      });
    });
  }

  deleteComplianceDetail(params: { ComplianceId: any }): Promise<any> {
    let action = AppSetting.API_ACTION.ACTION_REMOVE_COMPLIANCE;
    return new Promise((resolve) => {
      this.mainService.getRequest(action, params).then((response) => {
        resolve(response.Data);
      });
    });
  }

  extractInternalExcelFile(params: any[]): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_INTERNAL_EXCEL;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }

  extractExternalExcelFile(params: any[]): Promise<any> {
    console.log("params", params);

    let action = AppSetting.API_ACTION.EXTRACT_EXTERNAL_EXCEL;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }

  extractInternalWordFile(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_INTERNAL_WORD;
    console.log(action);
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }

  extractExternalWordFile(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_EXTERNAL_WORD;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }
  //  Web File
  extractWebExcelFile(params: any[]): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_WEB_EXCEL;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }

  extractWebWordFile(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_WEB_WORD;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }
  //  Database File
  extractDatabaseExcelFile(params: any[]): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_DATABASE_EXCEL;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }

  extractDatabaseWordFile(params: any): Promise<any> {
    let action = AppSetting.API_ACTION.EXTRACT_DATABASE_WORD;
    return new Promise((resolve, reject) => {
      this.mainService
        .filePostRequest(action, params)
        .then((data) => {
          resolve(data);
        })
    });
  }
}
