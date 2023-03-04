export class AppSetting {
  // Localhost
  // public static API_ENDPOINT = "  http://192.168.1.13:62695/api/";
  // public static API_ENDPOINT = "http://192.168.1.19:56789/api/";
  // Live
  public static API_ENDPOINT = "https://tern.wilsoncgrp.com/api/";

  public static API_ACTION = {
    ACTION_GET_COMPLIANCE: "ExtractExcel/GetCompliance",
    ACTION_POST_COMPLIANCE: "ExtractExcel/UploadExcel",
    ACTION_GET_COMPLIANCE_BY_ID: "ExtractExcel/GetClientByComplianceId",
    ACTION_GET_CRITERIA_BY_COMPLIANCE_ID:
      "ExtractExcel/GetCriteriaByComplianceId",
    ACTION_GET_SUBCRITERIA: "ExtractExcel/GetSubCriteria",
    ACTION_GET_SUBCRITERIA_BY_CLIENT: "ExtractExcel/GetSubCriteriaByClient",
    ACTION_GET_CONTROL_ACTIVITY: "ExtractExcel/GetControlActivity",
    ACTION_GET_CONTROL_ACTIVITY_BY_CLIENT:
      "ExtractExcel/GetControlActivityByClient",
    ACTION_GET_CONTROL_ACTIVITY_BY_SUBCRITERIA_ID:
      "ExtractExcel/GetControlActivityRefNoBySubCriteriaId",
    ACTION_SAVE_CONTROL_ACTIVITY: "ExtractExcel/SaveControlActivity",
    ACTION_EXPORT_EXCEL: "ExtractExcel/ExportExcel",
    ACTION_EXPORT_WORD: "ExtractExcel/GetOthersheetDocx",
    ACTION_POST_CLIENT: "ExtractExcel/SaveClient",
    ACTION_REMOVE_CLIENT: "ExtractExcel/RemoveClient",
    ACTION_REMOVE_COMPLIANCE: "ExtractExcel/RemoveCompliance",

    // EXTRACT URL
    EXTRACT_INTERNAL_EXCEL: "ExtractExcel/UploadInternalXmlXL",
    EXTRACT_INTERNAL_WORD: "ExtractExcel/UploadInternalXmlDOC",

    EXTRACT_EXTERNAL_EXCEL: "ExtractExcel/UploadExternalXmlXL",
    EXTRACT_EXTERNAL_WORD: "ExtractExcel/UploadExternalXmlDOC",

    EXTRACT_WEB_EXCEL: "ExtractExcel/UploadWebXmlXL",
    EXTRACT_WEB_WORD: "ExtractExcel/UploadWebXmlDOC",

    EXTRACT_DATABASE_EXCEL: "ExtractExcel/UploadDatabaseXmlXL",
    EXTRACT_DATABASE_WORD: "ExtractExcel/UploadDatabaseXmlDOC",
  };

  public static FILE_EXTENSION = {
    WORD_EXTENSION: ".doc",
    EXCEL_EXTENSION: ".xlsx",
  };

  public static APP_COSTANT = {
    STATUS_200: "200",
    STATUS_400: "400",
    STATUS_500: "500",
    STATUS_524: "524",
  };

  public static ASSESSMENT_TYPE = {
    SOC: "soc-2",
    CMMC: "cmmc",
    ISO: "iso",
    NISTSP5: "nistsp5",
    NISTSP4: "nistsp4",
    SWIFTCYBERSECURITY: "swift-cyber-security",
    GDPR: "gdpr",
  };

  public static AREA_SEVERITY = [
    {
      id: 1,
      name: "Low",
    },
    {
      id: 2,
      name: "Medium",
    },
    {
      id: 3,
      name: "High",
    },
  ];

  public static CONTROL_TYPE = [
    {
      id: 6,
      name: "Preventive",
    },
    {
      id: 7,
      name: "Detective",
    },
    {
      id: 8,
      name: "Corrective",
    },
    {
      id: 9,
      name: "Preventive/Detective",
    },
    {
      id: 10,
      name: "Detective/Corrective",
    },
  ];

  public static CRITERIA_TYPE = [
    {
      id: 4,
      name: "Mandatory",
    },
    {
      id: 5,
      name: "Advisory",
    },
  ];

  public static CONTROL_ASSESSMENT = [
    {
      id: 1,
      name: "Satisfactory",
    },
    {
      id: 2,
      name: "Fair",
    },
    {
      id: 3,
      name: "Weak",
    },
  ];

  public static TEST_STATUS = [
    {
      id: 1,
      name: "Completed",
    },
    {
      id: 2,
      name: "Processing",
    },
    {
      id: 3,
      name: "N/A",
    },
  ];

  public static TEST_OF_RESULT = [
    {
      id: 1,
      name: "No Exceptions Noted",
    },
    {
      id: 2,
      name: "Exceptions Noted",
    },
    {
      id: 3,
      name: "Not Applicable",
    },
  ];
  // LOW: 1,
  // MEDIUM: 2,
  // HIGH: 3,

  // public static CONTROL_ASSESSMENT = {
  //   SATISFACTORY: 1,
  //   FAIR: 2,
  //   WEAK: 3,
  // };

  // public static TEST_STATUS = {
  //   COMPLETED: 1,
  //   PROCESSING: 2,
  //   NONE: 3,
  // };

  // public static TEST_OF_RESULT = {
  //   NOEXCEPTION: 1,
  //   EXCEPTION: 2,
  //   NOTAPPLICABLE: 3,
  // };

  public static ALLSTATUS = [
    { name: "Low", style: "background:#3DED97" },
    {
      name: "Medium",
      style: "background:#fff44f",
    },
    {
      name: "High",
      style: "background:#ff252d",
    },
  ];

  // pass=int:4, fail=int:5

  // public static CONTROL_TYPE = {
  //   PREVENTIVE: 6,
  //   DETECTIVE: 7,
  //   CORRECTIVE: 8,
  //   PREVENTIVE2: 4,
  //   DETECTIVE2: 5,
  // };
  // public static CRITERIA_TYPE = {
  //   MANDATORY: 4,
  //   ADVISORY: 5,
  // };

  public static CONTROL_STATUS = [
    {
      id: 4,
      displayName: "Pass",
      name: "Pass",

    },
    {
      id: 5,
      displayName: "Fail",
      name: "Fail"
    },
    {
      id: 3,
      displayName: "N/A",
      name: "N/A",
    },
    {
      id: 6,
      displayName: "Partially Implimented",
      name: "PI",
    },
  ];

  public static CONTROL_LEVELS = [
    {
      id: 1,
      name: "Level 1",
    },
    {
      id: 2,
      name: "Level 2",
    },
    {
      id: 3,
      name: "Level 3",
    },
    // {
    //   id: 4,
    //   name: "Level 4",
    // },
    // {
    //   id: 5,
    //   name: "Level 5",
    // },
  ];
}
