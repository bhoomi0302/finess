import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "fuse-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.scss"],
})
export class FuseConfirmDialogComponent {
  public confirmMessage: string;
  public confirmTitle: string;
  public buttonLabel: string;
  checkedConfirm: boolean = false;

  /**
   * Constructor
   *
   * @param {MatDialogRef<FuseConfirmDialogComponent>} dialogRef
   */
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FuseConfirmDialogComponent>
  ) {
    this.confirmMessage = this.data.message;
    this.confirmTitle = this.data.title;
    this.buttonLabel = this.data.buttonLabel;
  }

  confirmMessageCheckbox(value) {
    this.checkedConfirm = !this.checkedConfirm;
  }
}
