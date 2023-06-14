import { Module } from "vuex";
import { IRoot } from "../types";
import { loginRe, getUserInfoById, getMenuById } from "@/service/login/login";
import { IloginAccount } from "@/service/login/types";
import router from "@/router";
import localStroge from "@/utils/localStroge";
import { mapMenus } from "@/utils/map_menus";
import { Ilogin } from "./types";

import { mapPermission } from "@/utils/mapPermission";
const Login: Module<Ilogin, IRoot> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      rolesMenu: [],
      permission: [],
    };
  },
  mutations: {
    upLoadToken(state, token: string) {
      state.token = token;
    },
    upLoadUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    upLoadUserMenu(state, rolesMenu) {
      state.rolesMenu = rolesMenu;
      const permissions = mapPermission(state.rolesMenu);
      state.permission = permissions;
      const mangerRoute = mapMenus(rolesMenu);
      mangerRoute.forEach((route) => {
        router.addRoute("main", route);
      });
    },
  },
  actions: {
    async loginAction({ commit, dispatch }, payload: IloginAccount) {
      const loginRes = await loginRe(payload);
      const { id, token } = loginRes.data;
      commit("upLoadToken", token);
      dispatch("getGobalData", null, { root: true });
      localStroge.setUserAccount("token", token);
      const getUserInfo = await getUserInfoById(id);
      const userInfo = getUserInfo.data;
      commit("upLoadUserInfo", getUserInfo.data);
      localStroge.setUserAccount("useInfo", userInfo.role.id);

      const roleMenu = await getMenuById(id);
      commit("upLoadUserMenu", roleMenu.data);
      localStroge.setUserAccount("roleMenu", roleMenu.data);

      router.push("/main");
    },
    // phoneLoginAction({ commit }, payload: IloginAccount) {
    //   console.log("phone login");
    // },
    refreshData({ commit, dispatch }) {
      const token = localStroge.getUserAcount("token");
      if (token) {
        commit("upLoadToken", token);
        dispatch("getGobalData", null, { root: true });
      }

      const userInfo = localStroge.getUserAcount("useInfo");
      if (userInfo) {
        commit("upLoadUserInfo", userInfo);
      }
      const rolesMenu = localStroge.getUserAcount("roleMenu");
      if (rolesMenu) {
        commit("upLoadUserMenu", rolesMenu);
      }
    },
  },
};

export default Login;
