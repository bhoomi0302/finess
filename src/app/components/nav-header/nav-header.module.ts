import { Injectable, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavHeaderComponent } from "./nav-header.component";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [NavHeaderComponent],
  imports: [CommonModule, RouterModule, MatButtonModule],
  exports: [NavHeaderComponent],
})
export class NavHeaderModule {}
