<template>
  <div class="tableContent">
    <div class="header">
      <slot name="header">
        <div class="headerTitle">{{ title }}</div>
        <div class="handler">
          <slot name="addWithRef"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="userInfo"
      class="wj-table"
      border
      style="width: 100%"
      @selection-change="handleSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        type="selection"
        v-if="showSeclect"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showIndex"
        type="index"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <slot name="footer">
      <div class="footer">
        <slot name="pages"></slot>
      </div>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  emits: ["acquireSelection"],
  props: {
    userInfo: {
      type: Array,
      required: true,
    },
    propsList: {
      type: Object,
      required: true,
    },
    showIndex: {
      type: Boolean,
      default: () => false,
    },
    showSeclect: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      required: true,
    },
    childrenProps: {
      type: Object,
      default: () => ({}),
    },
  },
  name: "",
  setup(props, { emit }) {
    const handleSelectChange = (value: any) => {
      console.log(value);
      emit("acquireSelection", value);
    };

    return {
      handleSelectChange,
    };
  },
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.handler {
  margin-bottom: 5px;
}
</style>
