<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadItem" :key="item.name">
      <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Ibread } from "./types";
export default defineComponent({
  name: "",
  props: {
    breadItem: {
      type: Array as PropType<Ibread[]>,
      default: () => [],
    },
  },
  /* eslint-disable */
  setup() {},
  /* eslint-disable */
});
</script>
<style scoped></style>
