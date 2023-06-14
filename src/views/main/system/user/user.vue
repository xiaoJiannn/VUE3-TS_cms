<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @reset-btn-click="handleResetBtn"
      @search-btn-click="handleSearchBtn"
    ></page-search>

    <page-content
      :tableConfig="tableConfig"
      pages-name="users"
      ref="pageContentRef"
      @handle-edit-click="handleEdit"
      @handle-new-click="handleNew"
    ></page-content>

    <page-dialog
      ref="pageModalRef"
      :form-config="modalConfigRef"
      :default-info="defaultInfo"
      page-name="users"
    ></page-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "@/store";
import pageSearch from "@/components/page-search/index";
import pageContent from "@/components/page-content";
import pageDialog from "@/components/page-dialog";

import { formConfig } from "./config/formItem";
import { tableConfig } from "./config/tableItem";
import { modalConfig } from "./config/modalItem";
import {
  pageContentRef,
  handleResetBtn,
  handleSearchBtn,
} from "@/hooks/pageSearch";
import {
  handleEdit,
  handleNew,
  pageModalRef,
  defaultInfo,
} from "@/hooks/pageModal";
export default defineComponent({
  name: "user",
  components: {
    pageSearch,
    pageContent,
    pageDialog,
  },
  setup() {
    // 动态添加部门

    const store = useStore();
    const modalConfigRef = computed(() => {
      const ModalDep = modalConfig.find(
        (item) => item.field === "departmentId"
      );
      ModalDep!.options = store.state.gobalDepartment.map((item) => {
        return {
          title: item.name,
          value: item.id,
        };
      });
      const ModalRole = modalConfig.find((item) => item.field === "roleId");
      ModalRole!.options = store.state.gobalRole.map((item) => {
        return {
          title: item.name,
          value: item.id,
        };
      });
      return modalConfig;
    });

    return {
      formConfig,
      tableConfig,
      pageContentRef,
      modalConfig,
      pageModalRef,
      defaultInfo,
      modalConfigRef,
      handleEdit,
      handleNew,
      handleResetBtn,
      handleSearchBtn,
    };
  },
});
</script>

<style scoped></style>
