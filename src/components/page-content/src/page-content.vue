<template>
  <div class="content">
    <wjtable
      :userInfo="userInfo"
      v-bind="tableConfig"
      @acquireSelection="acquireSelection"
    >
      <!-- header slot -->
      <template #addWithRef>
        <el-button
          type="primary"
          size="small"
          v-if="isCreate"
          @click="addClick"
        >
          <el-icon><DocumentAdd /></el-icon>
          添加
        </el-button>
        <el-button size="small">
          <el-icon><Loading /></el-icon>
          刷新
        </el-button>
      </template>

      <!-- table slot -->
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? "启用" : "禁用" }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ dateFormater(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ dateFormater(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            size="small"
            type="primary"
            v-if="isUpdate"
            @click="editClcik(scope.row)"
          >
            <el-icon><Edit /></el-icon>
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            v-if="isDelete"
            @click="deletPage(scope.row)"
          >
            <el-icon><DeleteFilled /></el-icon>
            删除
          </el-button>
        </div>
      </template>

      <!-- other -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
      <!-- footer  slot-->
      <template #pages>
        <div class="pagins">
          <el-pagination layout="prev, pager, next" :total="50" />
        </div>
      </template>
    </wjtable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

import wjtable from "@/base-ui/table";

import { DeleteFilled, Edit, DocumentAdd, Loading } from "@element-plus/icons";
import { dateFormater } from "@/utils/formatTime";
import { mapPermissions } from "@/hooks/permissionAq";
export default defineComponent({
  emits: ["handleNewClick", "handleEditClick"],
  props: {
    tableConfig: {
      // type:,
      required: true,
    },
    pagesName: {
      type: String,
      required: true,
    },
  },
  components: {
    wjtable,
    DeleteFilled,
    Edit,
    DocumentAdd,
    Loading,
  },
  name: "",
  /* eslint-disable */
  setup(props, { emit }) {
    const store = useStore();
    const isCreate = mapPermissions(props.pagesName, "create");
    const isUpdate = mapPermissions(props.pagesName, "update");
    const isDelete = mapPermissions(props.pagesName, "delete");
    const isQuery = mapPermissions(props.pagesName, "query");

    const acquireSelection = (value: any) => {
      console.log(value);
    };

    const getContentDataList = (info: any = {}) => {
      if (!isQuery) return;
      store.dispatch("System/getPageList", {
        pageName: props.pagesName,
        queryInfo: {
          offset: 0,
          size: 10,
          ...info,
        },
      });
    };
    getContentDataList();
    const userInfo = computed(() =>
      store.getters[`System/getDataList`](props.pagesName)
    );
    // 动态决定插槽
    const tableConfig_copy: any = props.tableConfig;

    const otherPropSlots = tableConfig_copy.propsList.filter((item: any) => {
      if (item.slotName === "status") return false;
      if (item.slotName === "createAt") return false;
      if (item.slotName === "updateAt") return false;
      if (item.slotName === "handler") return false;
      return true;
    });

    // 编辑/删除/添加
    const deletPage = (item: any) => {
      const pageName = props.pagesName;
      const payloadUrl = `${props.pagesName}/${item.id}`;
      store.dispatch("System/deletPageData", {
        payloadUrl,
        pageName,
      });
    };
    const addClick = () => {
      emit("handleNewClick");
    };
    const editClcik = (item: any) => {
      emit("handleEditClick", item);
    };

    return {
      acquireSelection,
      dateFormater,
      getContentDataList,
      deletPage,
      addClick,
      editClcik,
      otherPropSlots,
      userInfo,
      isCreate,
      isUpdate,
      isDelete,
    };
  },
});
/* eslint-disable */
</script>
<style scoped>
.content {
  padding: 20px;
  margin-top: 20px;
  border-top: 1px solid #ececec;
}
.handle-btns {
  display: flex;
  justify-content: center;
}
.pagins {
  margin-top: 20px;
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>
