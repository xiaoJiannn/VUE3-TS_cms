import { ref } from "vue";
import pageContent from "@/components/page-content";

export const pageContentRef = ref<InstanceType<typeof pageContent>>();
export const handleResetBtn = () => {
  pageContentRef.value?.getContentDataList();
};
export const handleSearchBtn = (queryInfo: any) => {
  console.log(queryInfo);
  pageContentRef.value?.getContentDataList(queryInfo.value);
};
