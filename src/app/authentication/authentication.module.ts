import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { Page404Component } from "./page404/page404.component";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatDatepickerModule } from "@angular/material/datepicker";

import { MAT_DATE_FORMATS } from "@angular/material/core";
import { MsalModule, MsalService, MSAL_INSTANCE } from "@azure/msal-angular";
import { MatRadioModule } from "@angular/material/radio";
import {
  IPublicClientApplication,
  PublicClientApplication,
} from "@azure/msal-browser";
import { SignupComponent } from "./signup/signup.component";

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: "0a0a96e0-f7d0-42ea-a976-680f4816a70b",
      redirectUri: "http://localhost:4200",
      authority:
        "https://login.microsoftonline.com/a7501e2b-80df-4ac9-b31c-5703649f46c2",
    },
  });
}

@NgModule({
  declarations: [Page404Component, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    IvyCarouselModule,
    MatInputModule,
    MatDatepickerModule,
    MsalModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
})
export class AuthenticationModule {}
