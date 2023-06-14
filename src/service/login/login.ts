import { IloginAccount } from "./types";
import wjRequest from "../index";
enum LoginApi {
  url = "/login",
  useInfo = "/users/",
  rolesMenu = "/role/",
}
export function loginRe(account: IloginAccount) {
  return wjRequest.post({
    url: LoginApi.url,
    data: account,
  });
}

export function getUserInfoById(id: number) {
  return wjRequest.get({
    url: LoginApi.useInfo + id,
  });
}

export function getMenuById(id: number) {
  return wjRequest.get({
    url: LoginApi.rolesMenu + id + "/" + "menu",
  });
}
