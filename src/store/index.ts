import { createStore, Store, useStore as useVuexStore } from "vuex";
import { IRoot } from "./types";
import Login from "./login/login";
import { IStore } from "./types";
import System from "./main/system/system";
import { getPageList } from "@/service/main/system/system";

import dashBoard from "./main/dashBoard/dashBoard";
const store = createStore<IRoot>({
  state() {
    return {
      name: "cwj",
      gobalRole: [],
      gobalDepartment: [],
      entireMenu: [],
    };
  },
  getters: {},
  mutations: {
    upLoadRoleData(state, list) {
      state.gobalRole = list;
    },
    upLoadDepartmentData(state, list) {
      state.gobalDepartment = list;
    },
    upLoadMenuData(state, list) {
      state.entireMenu = list;
    },
  },
  actions: {
    async getGobalData({ commit }) {
      const rolesRes = await getPageList("/role/list", {
        offset: 0,
        size: 1000,
      });
      const { list: rolesList } = rolesRes.data;

      const departmentRes = await getPageList("/department/list", {
        offset: 0,
        size: 1000,
      });
      const { list: departmentList } = departmentRes.data;

      const menuRes = await getPageList("/menu/list", {});
      const { list: menuList } = menuRes.data;

      commit("upLoadRoleData", rolesList);
      commit("upLoadDepartmentData", departmentList);
      commit("upLoadMenuData", menuList);
    },
  },
  modules: {
    Login,
    System,
    dashBoard,
  },
});

export function reloadVuexData() {
  store.dispatch("Login/refreshData");
  store.dispatch("dashBoard/getAnalysisData");
}
// export function loadGobalData() {
//   store.dispatch("getGobalData");
// }
export function useStore(): Store<IStore> {
  return useVuexStore();
}
export default store;
