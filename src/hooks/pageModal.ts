import { ref } from "vue";
import dialog from "@/components/page-dialog";
import { modalConfig } from "@/views/main/system/user/config/modalItem";
export const pageModalRef = ref<InstanceType<typeof dialog>>();
export const defaultInfo = ref({});

export const handleEdit = (item: any) => {
  if (pageModalRef.value) {
    defaultInfo.value = { ...item };
    pageModalRef.value.dialogVisible = true;
  }
  const isShowPass = modalConfig.find((item) => item.field === "password");
  isShowPass!.isHidden = true;
  console.log(isShowPass);
};
export const handleNew = () => {
  defaultInfo.value = {};
  if (pageModalRef.value) {
    pageModalRef.value.dialogVisible = true;
  }
  const isShowPass = modalConfig.find((item) => item.field === "password");
  isShowPass!.isHidden = false;
  console.log(isShowPass);
};
