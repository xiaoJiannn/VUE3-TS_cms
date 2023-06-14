<template>
  <div class="goods">
    <page-content :table-config="goodsTableConfig" pages-name="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">
        {{ "￥" + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ "￥" + scope.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { goodsTableConfig } from "./config/goodsTableConfig";
export default defineComponent({
  name: "goods",
  components: {
    pageContent,
  },
  setup() {
    return { goodsTableConfig };
  },
});
</script>

<style scoped></style>
