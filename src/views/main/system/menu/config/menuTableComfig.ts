export const menuTableConfig = {
  title: "菜单列表",
  propsList: [
    {
      prop: "name",
      label: "菜单名称",
      minWidth: "100",
    },
    {
      prop: "type",
      label: "类型",
      minWidth: "60",
    },
    {
      prop: "url",
      label: "菜单url",
      minWidth: "100",
    },
    {
      prop: "icon",
      label: "菜单icon",
      minWidth: "100",
    },
    {
      prop: "permission",
      label: "按钮权限",
      minWidth: "100",
    },
  ],
  showIndex: false,
  showSelection: false,
  childrenProps: {
    rowKey: "id",
    treeProp: {
      children: "children",
    },
  },
  showFooter: false,
};
