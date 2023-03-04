import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatTabsModule } from "@angular/material/tabs";
import { AuthLayoutComponent } from "./app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./app-layout/main-layout/main-layout.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class LayoutModule {}
