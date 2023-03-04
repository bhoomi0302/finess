// Sidebar route metadata
export interface RouteInfo {
  path: string;
  title: string;
  moduleName: string;
  img: string;
  class: string;
  submenu: RouteInfo[];
}
