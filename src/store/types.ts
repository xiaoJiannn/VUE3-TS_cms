import { Ilogin } from "./login/types";
import { IdashBoard } from "./main/dashBoard/type";
import { ISystem } from "./main/system/type";
export interface IRoot {
  name: string;
  gobalRole: any[];
  gobalDepartment: any[];
  entireMenu: any[];
}

export interface IRootWLogin {
  Login: Ilogin;
  System: ISystem;
  dashboard: IdashBoard;
}

export type IStore = IRoot & IRootWLogin;
