import { Component, OnInit } from "@angular/core";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { MsalService } from "@azure/msal-angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit
{
  constructor(private msalService: MsalService, public router: Router) {
    super();
  }

  ngOnInit() {}

  logIn() {
    this.router.navigate(["/fitness/home"]);
  }
}
