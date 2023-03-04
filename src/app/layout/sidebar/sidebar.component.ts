import { FuseConfirmDialogComponent } from "./../../components/confirm-dialog/confirm-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { Router, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  OnDestroy,
} from "@angular/core";
// import { ROUTES } from "./sidebar-items";
import { AuthService } from "src/app/core/service/auth.service";
import { Role } from "src/app/core/models/role";
import { AppSetting } from "src/app/core/service/AppSetting";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit, OnDestroy {
  public sidebarItems: any[];
  level1Menu = "";
  level2Menu = "";
  level3Menu = "";
  public innerHeight: any;
  public bodyTag: any;
  listMaxHeight: string;
  listMaxWidth: string;
  userFullName: string;
  userImg: string = "./assets/images/user/user.png";
  userType: string;
  headerHeight = 60;
  currentRoute: string;
  routerObj = null;
  file_url;
  logoutConfirmation = true;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private authService: AuthService,
    private router: Router,
    public matDialog: MatDialog
  ) {
    const body = this.elementRef.nativeElement.closest("body");
    this.routerObj = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // logic for select active menu in dropdown
        const role = ["admin", "doctor", "patient"];
        const currenturl = event.url.split("?")[0];
        const firstString = currenturl.split("/").slice(1)[0];

        if (role.indexOf(firstString) !== -1) {
          this.level1Menu = event.url.split("/")[2];
          this.level2Menu = event.url.split("/")[3];
        } else {
          this.level1Menu = event.url.split("/")[1];
          this.level2Menu = event.url.split("/")[2];
        }

        this.renderer.removeClass(this.document.body, "overlay-open");
      }
    });
  }
  @HostListener("window:resize", ["$event"])
  windowResizecall(event) {
    this.setMenuHeight();
    this.checkStatuForResize(false);
  }
  @HostListener("document:mousedown", ["$event"])
  onGlobalClick(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.document.body, "overlay-open");
    }
  }
  callLevel1Toggle(event: any, element: any) {
    if (element === this.level1Menu) {
      this.level1Menu = "0";
    } else {
      this.level1Menu = element;
    }
    const hasClass = event.target.classList.contains("toggled");
    if (hasClass) {
      this.renderer.removeClass(event.target, "toggled");
    } else {
      this.renderer.addClass(event.target, "toggled");
    }
  }
  callLevel2Toggle(event: any, element: any) {
    if (element === this.level2Menu) {
      this.level2Menu = "0";
    } else {
      this.level2Menu = element;
    }
  }
  callLevel3Toggle(event: any, element: any) {
    if (element === this.level3Menu) {
      this.level3Menu = "0";
    } else {
      this.level3Menu = element;
    }
  }
  ngOnInit() {
    this.menus();
    this.initLeftSidebar();
    this.bodyTag = this.document.body;
    // this.sidebarItems = ROUTES;
  }

  menus() {
    if (this.authService.currentUserValue) {
      const userRole = this.authService.currentUserValue.role_name;
      this.userFullName =
        this.authService.currentUserValue.first_name +
        " " +
        this.authService.currentUserValue.last_name;
      if (this.authService.currentUserValue.img)
        this.userImg = this.authService.currentUserValue.img;
    }
  }
  ngOnDestroy() {
    this.routerObj.unsubscribe();
  }
  initLeftSidebar() {
    const _this = this;
    // Set menu height
    _this.setMenuHeight();
    _this.checkStatuForResize(true);
  }
  setMenuHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.listMaxHeight = height + "";
    this.listMaxWidth = "500px";
  }
  isOpen() {
    return this.bodyTag.classList.contains("overlay-open");
  }
  checkStatuForResize(firstTime) {
    if (window.innerWidth < 1170) {
      this.renderer.addClass(this.document.body, "ls-closed");
    } else {
      this.renderer.removeClass(this.document.body, "ls-closed");
    }
  }

  mouseHover(e) {
    console.log(e);

    // e.path[0].children[1].classList.add("ml-menu-hover");
    // const body = this.elementRef.nativeElement.closest("body");
    // if (body.classList.contains("submenu-closed")) {
    //   this.renderer.addClass(this.document.body, "side-closed-hover");
    //   this.renderer.removeClass(this.document.body, "submenu-closed");
    // }
  }
  mouseOut(e) {
    console.log(e);
    // e.path[0].children[1].classList.remove("ml-menu-hover");
    // const body = this.elementRef.nativeElement.closest("body");
    // if (body.classList.contains("side-closed-hover")) {
    //   this.renderer.removeClass(this.document.body, "side-closed-hover");
    //   this.renderer.addClass(this.document.body, "submenu-closed");
    // }
  }
  logout() {
    if (this.logoutConfirmation == true) {
      let confirmDialogRef = this.matDialog.open(FuseConfirmDialogComponent, {
        disableClose: true,
        width: "500px",
        data: {
          title: "Logout Confirmation!",
          message: "Do you want to Logout?",
          buttonLabel: "LOGOUT",
        },
      });
      confirmDialogRef.afterClosed().subscribe(async (result) => {
        if (result) {
          this.router.navigate(["/authentication/signin"]);
          this.logoutConfirmation = false;
        }
      });
    } else {
      this.router.navigate(["/task/extract-vulnerability"]);
    }
  }
}
