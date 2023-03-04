import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonService } from "src/app/core/service/providers/common.service";

@Component({
  selector: "app-nav-header",
  templateUrl: "./nav-header.component.html",
  styleUrls: ["./nav-header.component.scss"],
})
export class NavHeaderComponent implements OnInit {
  @Input("section") section;
  @Input("module") module;
  @Input("moduleUrl") moduleUrl;
  @Input("isBack") isBack;
  @Input("backUrl") backUrl;
  @Input("isGetParentId") isGetParentId;
  routeNavigate;
  constructor(
    public commonService: CommonService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  redirectBack() {
    let selectedId = this.route.snapshot.params.id;
    if (selectedId && this.isGetParentId == true) {
      this.routeNavigate = this.backUrl + "/" + selectedId;
      this.router.navigate([this.routeNavigate]);
    } else {
      this.router.navigate([this.backUrl]);
    }
  }
}
