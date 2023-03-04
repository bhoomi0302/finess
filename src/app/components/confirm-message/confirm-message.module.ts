import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmMessageComponent } from "./confirm-message.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ConfirmMessageComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatDialogModule],
})
export class ConfirmMessageModule {}
