<template>
  <div class="dialog">
    <el-dialog
      v-model="dialogVisible"
      title="新建用户"
      width="30%"
      center
      destroy-on-close
    >
      <wj-form
        :form-item="formConfig"
        v-model="formData"
        :Layout="layout"
      ></wj-form>
      <slot name="tree"></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false"> 取消 </el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确认
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType, watch } from "vue";
import wjForm from "@/base-ui/Form";
import IwjForm from "@/base-ui/Form/src/types";
import { useStore } from "@/store";
export default defineComponent({
  name: "",
  // emits:[''],
  components: {
    wjForm,
  },
  props: {
    formConfig: {
      type: Array as PropType<IwjForm[]>,
      reuqired: true,
    },
    defaultInfo: {
      type: Object,
      default: () => ({}),
    },
    pageName: {
      type: String,
      required: true,
    },
    permissionInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});
    const layout = { span: 24 };
    const store = useStore();
    watch(
      () => props.defaultInfo,
      (newVal) => {
        for (const item of props.formConfig!) {
          formData.value[item.field] = newVal[item.field];
        }
      }
    );

    const handleConfirmClick = () => {
      console.log({ ...props.permissionInfo });
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch("System/editPageData", {
          pageName: props.pageName,
          editData: {
            ...formData.value,
            ...props.permissionInfo,
          },
          id: props.defaultInfo.id,
        });
      } else {
        // 新建
        store.dispatch("System/createPageData", {
          pageName: props.pageName,
          newData: {
            ...formData.value,
            ...props.permissionInfo,
          },
        });
      }
    };

    return {
      formData,
      layout,
      dialogVisible,
      handleConfirmClick,
    };
  },
});
</script>
<style scoped></style>
