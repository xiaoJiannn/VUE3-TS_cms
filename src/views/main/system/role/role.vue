<template>
  <div class="role">
    <page-search :formConfig="formConfig"></page-search>
    <page-content
      :tableConfig="tableConfig"
      pagesName="role"
      @handle-edit-click="handleEdit"
      @handle-new-click="handleNew"
    ></page-content>
    <page-dialog
      :form-config="modalConfig"
      page-name="role"
      ref="pageModalRef"
      :permission-info="permissionInfo"
    >
      <template #tree>
        <div class="menu-tree">
          <el-tree
            ref="treeRef"
            :data="menuList"
            show-checkbox
            node-key="id"
            highlight-current
            :props="{ children: 'children', label: 'name' }"
            @check="handleChecked"
          />
        </div>
      </template>
    </page-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store";
import pageContent from "@/components/page-content";
import pageSearch from "@/components/page-search";
import { pageModalRef, handleEdit, handleNew } from "@/hooks/pageModal";

import { formConfig } from "./config/rolesFormConfig";
import { tableConfig } from "./config/rolesTableConfig";
import pageDialog from "@/components/page-dialog";

import { modalConfig } from "./config/rolesModalConfig";
export default defineComponent({
  name: "role",
  components: {
    pageContent,
    pageSearch,
    pageDialog,
  },
  setup() {
    const store = useStore();
    const menuList = computed(() => {
      return store.state.entireMenu;
    });
    const permissionInfo = ref({});
    const handleChecked = (data1: any, data2: any) => {
      const checkKeys = data2.checkedKeys;

      const halfCheckKeys = data2.halfCheckedKeys;
      const menuData = [...checkKeys, ...halfCheckKeys];
      permissionInfo.value = { menuData };
    };
    return {
      tableConfig,
      formConfig,
      pageModalRef,
      modalConfig,
      permissionInfo,
      menuList,
      handleEdit,
      handleNew,
      handleChecked,
    };
  },
});
</script>

<style scoped></style>
