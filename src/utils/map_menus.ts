import { RouteRecordRaw } from "vue-router";
import { Ibread } from "@/components/nav-header/src/cpns/types";
let firstMenu: any = null;

export function mapMenus(rolesMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];
  const allRoutes: RouteRecordRaw[] = [];
  const pathfiles = require.context("../router/main", true, /\.ts/);
  pathfiles.keys().forEach((keys) => {
    /* eslint-disable */
    const route = require("../router/main" + keys.split(".")[1]);
    /* eslint-disable */

    allRoutes.push(route.default);
  });
  const _recurseMenus = function (menus: any[]) {
    for (const menu of menus) {
      if (menu.type === 2) {
        const realMenu = allRoutes.find((route) => route.path === menu.url);
        if (realMenu) routes.push(realMenu);
        if (!firstMenu) firstMenu = menu;
      } else {
        _recurseMenus(menu.children);
      }
    }
  };
  _recurseMenus(rolesMenu);

  return routes;
}

export function mapTobread(
  rolesMenu: any[],
  currentPath: string,
  bread?: Ibread[]
): any {
  for (const menu of rolesMenu) {
    if (menu.type === 1) {
      const chosenMenu = mapTobread(menu.children ?? [], currentPath);
      if (chosenMenu) {
        bread?.push({ name: menu.name });
        bread?.push({ name: chosenMenu.name });
        return chosenMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}
export function reBread(rolesMenu: any[], currentPath: any) {
  const BreadCurm: Ibread[] = [];
  mapTobread(rolesMenu, currentPath, BreadCurm);

  return BreadCurm;
}

export { firstMenu };
