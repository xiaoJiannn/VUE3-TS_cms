export const goodsTableConfig = {
  title: "商品列表",
  propsList: [
    {
      prop: "name",
      label: "商品名称",
      minWidth: "80",
    },
    {
      prop: "oldPrice",
      label: "原价格",
      minWidth: "80",
      slotName: "oldPrice",
    },
    {
      prop: "newPrice",
      label: "现价格",
      minWidth: "80",
      slotName: "newPrice",
    },
    {
      prop: "imgUrl",
      label: "商品图片",
      minWidth: "100",
      slotName: "image",
    },
    {
      prop: "status",
      label: "状态",
      minWidth: "100",
      slotName: "status",
    },
  ],
  showIndex: true,
  showSelection: true,
};
