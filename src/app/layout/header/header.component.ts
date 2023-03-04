import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { ConfigService } from "src/app/config/config.service";
import { AuthService } from "src/app/core/service/auth.service";
import { RightSidebarService } from "src/app/core/service/rightsidebar.service";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
import { Role } from "src/app/core/models/role";
import { MatDrawer } from "@angular/material/sidenav";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import { CustomValidators } from "src/app/core/classes/custom-validators";
import { ToasterService } from "src/app/core/service/toaster.service";
import { AppSetting } from "src/app/core/service/AppSetting";
import { MatDialog } from "@angular/material/dialog";
import { CommonService } from "src/app/core/service/providers/common.service";
const document: any = window.document;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit, AfterViewInit
{
  public config: any = {};
  userImg: string = "./assets/images/pages/user.png";
  userImg1: string = "./assets/images/pages/user75.png";
  homePage: string;
  isNavbarCollapsed = false;
  flagvalue;
  countryName;
  defaultClinicLocation;
  langStoreValue: string;
  defaultFlag: string;
  isOpenSidebar: boolean;
  userFullName: string;
  userType: string;

  nav_position: string = "end";

  currentUser;

  passwordForm: FormGroup;
  profileForm: FormGroup;
  showFormType = "";
  hidepassword = true;
  hidenewpassword = true;
  hideconfirmpassword = true;
  hideEmailBox = true;
  private _unsubscribeAll: Subject<any>;

  @ViewChild("sideNav") public sideNav: MatDrawer;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private rightSidebarService: RightSidebarService,
    private configService: ConfigService,
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private toasterService: ToasterService,
    public dialog: MatDialog,
    public commonService: CommonService
  ) {
    super();
    this._unsubscribeAll = new Subject();
    this.profileForm = this.fb.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      email: [
        "",
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.pattern(
            "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"
          ),
        ],
      ],
    });
    this.passwordForm = this.fb.group({
      current_password: [
        "",
        [
          Validators.required,
          // CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          // CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          // CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          // Validators.minLength(8),
        ],
      ],
      new_password: [
        "",
        [
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          Validators.minLength(8),
        ],
      ],
      confirm_password: [
        "",
        [
          Validators.required,
          CustomValidators.patternValidator(/\d/, { hasNumber: true }),
          CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
          CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
          Validators.minLength(8),
        ],
      ],
    });
    if (localStorage.getItem("userDefaultLocation")) {
      this.defaultClinicLocation = JSON.parse(
        localStorage.getItem("userDefaultLocation")
      );
    }
  }

  ngOnInit() {
    this.config = this.configService.configData;

    this.homePage = "fitness/home";

    // this.renderer.addClass(this.document.body, "side-closed");
    // this.renderer.addClass(this.document.body, "submenu-closed");
    if (this.authService.currentUserValue) {
      this.currentUser = this.authService.currentUserValue;
    }
  }

  ngAfterViewInit() {
    // set theme on startup
    if (localStorage.getItem("theme")) {
      this.renderer.removeClass(this.document.body, this.config.layout.variant);
      this.renderer.addClass(this.document.body, localStorage.getItem("theme"));
    } else {
      this.renderer.addClass(this.document.body, this.config.layout.variant);
    }

    if (localStorage.getItem("menuOption")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("menuOption")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "menu_" + this.config.layout.sidebar.backgroundColor
      );
    }

    if (localStorage.getItem("choose_logoheader")) {
      this.renderer.addClass(
        this.document.body,
        localStorage.getItem("choose_logoheader")
      );
    } else {
      this.renderer.addClass(
        this.document.body,
        "logo-" + this.config.layout.logo_bg_color
      );
    }

    if (localStorage.getItem("sidebar_status")) {
      if (localStorage.getItem("sidebar_status") === "close") {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      } else {
        this.renderer.removeClass(this.document.body, "side-closed");
        this.renderer.removeClass(this.document.body, "submenu-closed");
      }
    } else {
      if (this.config.layout.sidebar.collapsed === true) {
        this.renderer.addClass(this.document.body, "side-closed");
        this.renderer.addClass(this.document.body, "submenu-closed");
      }
    }
  }
  callFullscreen() {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }
  mobileMenuSidebarOpen(event: any, className: string) {
    const hasClass = event.target.classList.contains(className);
    if (hasClass) {
      this.renderer.removeClass(this.document.body, className);
    } else {
      this.renderer.addClass(this.document.body, className);
    }
  }
  callSidemenuCollapse() {
    const hasClass = this.document.body.classList.contains("side-closed");
    if (hasClass) {
      this.renderer.removeClass(this.document.body, "side-closed");
      this.renderer.removeClass(this.document.body, "submenu-closed");
    } else {
      this.renderer.addClass(this.document.body, "side-closed");
      this.renderer.addClass(this.document.body, "submenu-closed");
    }
  }
  public toggleRightSidebar(): void {
    this.subs.sink = this.rightSidebarService.sidebarState.subscribe(
      (isRunning) => {
        this.isOpenSidebar = isRunning;
      }
    );

    this.rightSidebarService.setRightSidebar(
      (this.isOpenSidebar = !this.isOpenSidebar)
    );
  }
  showProfileSidebar() {
    this.sideNav.toggle();
  }
  showprofile() {
    this.router.navigate(["extra-pages/profile"]);
  }
  async logout() {
    let data: any = await this.authService.logout({});
    this.router.navigate(["/authentication/signin"]);
  }

  showForm(type) {
    if (type == "editProfile") {
      this.profileForm.patchValue(this.currentUser);
      this.profileForm.get("email").setValue(this.currentUser.user.email);
    } else if (type == "changePassword") {
      this.passwordForm
        .get("new_password")
        .valueChanges.pipe(takeUntil(this._unsubscribeAll))
        .subscribe(() => {
          this.passwordForm.get("confirm_password").updateValueAndValidity();
        });
    }
    this.showFormType = type;
  }

  async onSubmit() {}

  changePassword() {}

  onCancel() {
    this.showForm("");
  }

  changeLocation() {}
  homePageRedirect() {
    this.router.navigate(["fitness/home"]);
  }
  browseData() {
    this.router.navigate(["fitness/browse"]);
  }
  profile() {
    this.router.navigate(["fitness/profile"]);
  }
  logoutProfile() {
    this.router.navigate(["authentication/signin"]);
  }
}
