<template>
  <div class="menu">
    <page-content
      pages-name="menu"
      :table-config="menuTableConfig"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import pageContent from "@/components/page-content";
import { menuTableConfig } from "./config/menuTableComfig";
export default defineComponent({
  name: "WJmenu",
  components: {
    pageContent,
  },
  setup() {
    return { menuTableConfig };
  },
});
</script>

<style scoped></style>
