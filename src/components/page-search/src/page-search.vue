<template>
  <div class="page-search">
    <wjForm :formItem="formConfig" v-model="formData">
      <template #header>
        <h2>search</h2>
      </template>
      <template #footer>
        <div class="handle-res">
          <el-button @click="handleReset">
            <el-icon><Refresh /></el-icon>
            重置
          </el-button>
          <el-button type="primary" @click="hanleSearch">
            <el-icon><search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </wjForm>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import wjForm from "@/base-ui/Form/src/Form.vue";
import IwjForm from "@/base-ui/Form/src/types";
import { Refresh, Search } from "@element-plus/icons";
export default defineComponent({
  name: "",
  emits: ["resetBtnClick", "searchBtnClick"],
  props: {
    formConfig: {
      type: Array as PropType<IwjForm[]>,
      required: true,
    },
  },
  components: {
    wjForm,
    Refresh,
    Search,
  },
  setup(props, { emit }) {
    /* eslint-disable */
    const formItem = props.formConfig;
    const autoProduceItem: any = {};
    //由表单属性动态决定
    for (const items of formItem) {
      autoProduceItem[items.field] = "";
    }
    /* eslint-disable */
    const formData = ref(autoProduceItem);
    const handleReset = () => {
      formData.value = autoProduceItem;
      emit("resetBtnClick");
    };
    const hanleSearch = () => {
      emit("searchBtnClick", formData);
    };
    return {
      formData,
      handleReset,
      hanleSearch,
    };
  },
});
</script>
<style scoped>
.handle-res {
  text-align: right;
  padding: 0 20px 20px 10px;
}
</style>
