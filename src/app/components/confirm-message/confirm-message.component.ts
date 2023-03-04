import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-confirm-message",
  templateUrl: "./confirm-message.component.html",
  styleUrls: ["./confirm-message.component.scss"],
})
export class ConfirmMessageComponent implements OnInit {
  public confirmMessage1: string;
  public confirmMessage2: string;
  public confirmTitle: string;
  public buttonLabel: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmMessageComponent>
  ) {
    this.confirmMessage1 = this.data.message1;
    this.confirmMessage2 = this.data.message2;
    this.confirmTitle = this.data.title;
    this.buttonLabel = this.data.buttonLabel;
  }

  ngOnInit(): void {}
}
