import IwjForm from "@/base-ui/Form/src/types";

export const formConfig: IwjForm[] = [
  {
    field: "id",
    type: "input",
    label: "id",
    placeholder: "输入id",
  },
  {
    field: "name",
    type: "input",
    label: "角色名",
    placeholder: "请输入角色",
  },

  {
    field: "createTime",
    type: "datepicker",
    label: "日期",
    otherOptions: {
      startPlaceholder: "开始时间",
      endPlaceholder: "结束时间",
      type: "daterange",
    },
  },
];
