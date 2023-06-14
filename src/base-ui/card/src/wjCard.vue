<template>
  <div class="wjcard">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  props: {
    title: {
      type: String,
      default: "title",
    },
  },
  // setup() {},
});
</script>
<style scoped></style>
