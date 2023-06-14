import { Module } from "vuex";
import { IRoot } from "@/store/types";
import { ISystem } from "./type";
import {
  getPageList,
  deletPageList,
  creatPageList,
  editPageList,
} from "@/service/main/system/system";

const System: Module<ISystem, IRoot> = {
  namespaced: true,
  state() {
    return {
      userInfo: [],
      userCount: 0,

      roleInfo: [],
      roleCount: 0,

      goodsInfo: [],
      goodsCount: 0,

      menuInfo: [],
      menuCount: 0,
    };
  },
  getters: {
    getDataList(state) {
      return (value: string) => {
        switch (value) {
          case "users":
            return state.userInfo;
          case "role":
            return state.roleInfo;
          case "goods":
            return state.goodsInfo;
          case "menu":
            return state.menuInfo;
        }
      };
    },
  },

  mutations: {
    uploadUsersList(state, list: any) {
      state.userInfo = list;
    },
    uploadUsersCount(state, count: number) {
      state.userCount = count;
    },
    uploadRoleList(state, list: any) {
      state.roleInfo = list;
    },
    uploadRoleCount(state, count: number) {
      state.roleCount = count;
    },
    uploadGoodsList(state, list: any) {
      state.goodsInfo = list;
    },
    uploadGoodsCount(state, count: number) {
      state.goodsCount = count;
    },
    uploadMenuList(state, list: any) {
      state.menuInfo = list;
    },
    uploadMenuCount(state, count: number) {
      state.menuCount = count;
    },
  },
  actions: {
    async getPageList({ commit }, payload: any) {
      const pageName: string = payload.pageName;
      let pageUrl = "";
      switch (pageName) {
        case "users":
          pageUrl = "/users/list";
          break;
        case "role":
          pageUrl = "/role/list";
          break;
        case "goods":
          pageUrl = "/goods/list";
          break;
        case "menu":
          pageUrl = "/menu/list";
          break;
      }
      const pageList = await getPageList(pageUrl, payload.queryInfo);
      const { list, count } = pageList.data;
      console.log(pageList);

      const firstLetter: string =
        pageName.split("").splice(0, 1).join("").toUpperCase() +
        pageName.split("").splice(1).join("");
      commit(`upload${firstLetter}List`, list);
      commit(`upload${firstLetter}Count`, count);
    },
    async deletPageData({ dispatch }, payload: any) {
      const pageName = payload.pageName;
      deletPageList(payload.payloadUrl);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },

    // 新建/删除
    async createPageData({ dispatch }, payload: any) {
      const { pageName, newData } = payload;
      const pageUrl = `/${pageName}`;
      // 新建
      await creatPageList(pageUrl, newData);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
    async editPageData({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      await editPageList(pageUrl, editData);
      dispatch("getPageList", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10,
        },
      });
    },
  },
};

export default System;
