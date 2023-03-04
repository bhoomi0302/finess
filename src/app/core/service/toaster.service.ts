import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ToasterService {
  constructor(private _snackBar: MatSnackBar) {}

  _setToaster(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
  success(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: ["success_snak_bar"],
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
  error(message: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: ["error_snak_bar"],
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }
}
