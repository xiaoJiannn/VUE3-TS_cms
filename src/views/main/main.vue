<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="Mflod ? '60px' : '240px'">
        <nav-menu :Mflod="Mflod"></nav-menu>
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @FoldChange="FoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="view"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import navMenu from "@/components/nav-menu";
import navHeader from "@/components/nav-header";
export default defineComponent({
  components: { navMenu, navHeader },
  setup() {
    const Mflod = ref(false);
    const FoldChange = (isFolded: boolean) => {
      Mflod.value = isFolded;
    };
    return { FoldChange, Mflod };
  },
});
</script>

<style scoped>
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.view {
  background-color: #fff;
}
.main-content,
.page {
  height: 100%;
}
.page-content {
  height: calc(100% - 48px);
  padding: 15px !important;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}
.el-header {
  height: 48px !important;
}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none;
  /* firefox */
  -ms-overflow-style: none;
  /* IE 10+ */
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
