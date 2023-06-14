export const tableConfig = {
  showIndex: true,
  showSeclect: true,
  title: "用户列表",
  propsList: [
    {
      prop: "name",
      label: "用户名",
      minWidth: "100",
    },
    {
      prop: "realname",
      label: "真实姓名",
      minWidth: "100",
    },
    {
      prop: "cellphone",
      label: "手机号码",
      minWidth: "120",
    },
    {
      prop: "enable",
      label: "状态",
      minWidth: "100",
      slotName: "status",
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "230",
      slotName: "createAt",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "230",
      slotName: "updateAt",
    },
    {
      label: "操作",
      minWidth: "160",
      slotName: "handler",
    },
  ],
};
