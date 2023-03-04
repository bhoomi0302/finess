import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { FuseConfirmDialogComponent } from "./confirm-dialog.component";

@NgModule({
  declarations: [FuseConfirmDialogComponent],
  imports: [MatDialogModule, MatButtonModule, MatCheckboxModule],
  entryComponents: [FuseConfirmDialogComponent],
})
export class FuseConfirmDialogModule {}
