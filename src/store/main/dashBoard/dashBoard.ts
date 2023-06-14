import { Module } from "vuex";
import { IRoot } from "@/store/types";
import { IdashBoard } from "./type";

import {
  getCategoryGoodsCount,
  getAmountList,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getGoodsAddressSale,
} from "@/service/main/analysis/dashBoard";
const dashBoard: Module<IdashBoard, IRoot> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      goodsSaleTop10: [],
      goodsAddressSale: [],
    };
  },
  getters: {},

  mutations: {
    changeTopPanelDatas(state, list) {
      state.topPanelDatas = list;
    },
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeGoodsSaleTop10(state, list) {
      state.goodsSaleTop10 = list;
    },
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list;
    },
  },
  actions: {
    async getAnalysisData({ commit }) {
      const resultTopPanelDatas = await getAmountList();
      commit("changeTopPanelDatas", resultTopPanelDatas.data);

      const goodsCount = await getCategoryGoodsCount();
      commit("changeCategoryGoodsCount", goodsCount.data);

      const goodsSale = await getCategoryGoodsSale();
      commit("changeCategoryGoodsSale", goodsSale.data);

      const goodsFavor = await getCategoryGoodsFavor();
      commit("changeCategoryGoodsFavor", goodsFavor.data);

      const addressSasle = await getGoodsAddressSale();
      commit("changeGoodsAddressSale", addressSasle.data);
    },
  },
};

export default dashBoard;
