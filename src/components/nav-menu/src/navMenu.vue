<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!Mflod">Edit by Brian&VUE3+TS</span>
    </div>
    <el-menu
      :default-active="defaultMenu"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="Mflod"
    >
      <template v-for="item in loginMenu" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''" class="el-submenu">
            <template #title>
              <el-icon><checked /></el-icon>

              <span class="itemSpan"> {{ item.name }}</span>
            </template>

            <template v-for="child in item.children" :key="child.id">
              <el-menu-item
                class="el-menu-item"
                :index="child.id + ''"
                @click="mangerRoute(child)"
              >
                <el-icon><avatar /></el-icon>

                <span>{{ child.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <template v-else-if="item.type === 2">
          <el-menu-item>
            <el-icon><checked /></el-icon>
            <span> {{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "@/store";
import { Checked, Avatar } from "@element-plus/icons-vue";

import { mapTobread } from "@/utils/map_menus";
export default defineComponent({
  name: "navMenu",
  components: {
    Checked,
    Avatar,
  },
  props: {
    Mflod: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // store
    const store = useStore();
    const loginMenu = computed(() => {
      return store.state.Login.rolesMenu;
    });

    // router
    const router = useRouter();
    const mangerRoute = (child: any) => {
      router.push({
        path: child.url,
      });
    };

    // menuMap
    const route = useRoute();
    const currentPath = route.path;
    const lightedMenu = mapTobread(loginMenu.value, currentPath);
    const defaultMenu = ref(lightedMenu.id + "");

    return {
      loginMenu,
      mangerRoute,
      defaultMenu,
    };
  },
});
</script>
<style scoped>
.itemSpan {
  color: #fff;
}
.nav-menu {
  height: 100%;
  background-color: #001529;
}
.nav-menu .logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.nav-menu .logo .img {
  height: 100%;
  margin: 0 10px;
}
.nav-menu .logo .title {
  font-size: 13px;
  font-weight: 700;
  color: white;
}
.nav-menu .el-menu {
  border-right: none;
}
.nav-menu .el-submenu {
  background-color: #001529 !important;
  color: #fff !important;
}
.nav-menu .el-submenu .el-menu-item {
  padding-left: 50px !important;
  background-color: #0c2135 !important;
}
.nav-menu ::v-deep .el-submenu__title {
  background-color: #001529 !important;
}
.nav-menu .el-menu-item:hover {
  color: #fff !important;
}
.nav-menu .el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
