import wjRequest from "@/service";
enum dashBoardApi {
  amountList = "/goods/amount/list",
  categoryGoodsCount = "/goods/category/count",
  categoryGoodsSale = "/goods/category/sale",
  categoryGoodsFavor = "/goods/category/favor",
  goodsAddressSale = "/goods/address/sale",
}
export function getAmountList() {
  return wjRequest.get({
    url: dashBoardApi.amountList,
  });
}

export function getCategoryGoodsCount() {
  return wjRequest.get({
    url: dashBoardApi.categoryGoodsCount,
  });
}

export function getCategoryGoodsSale() {
  return wjRequest.get({
    url: dashBoardApi.categoryGoodsSale,
  });
}

export function getCategoryGoodsFavor() {
  return wjRequest.get({
    url: dashBoardApi.categoryGoodsFavor,
  });
}

export function getGoodsAddressSale() {
  return wjRequest.get({
    url: dashBoardApi.goodsAddressSale,
  });
}
