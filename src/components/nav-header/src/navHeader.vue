<template>
  <div class="nav-header">
    <el-icon class="svgIcon">
      <component :is="svgIcon" @click="torggleIcon"> </component>
    </el-icon>
    <div class="content">
      <bread :breadItem="breadCom"></bread>
      <div class="info">
        <user-avtor></user-avtor>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";

import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
import userAvtor from "./cpns/User.vue";
import bread from "./cpns/bread.vue";
import { reBread } from "@/utils/map_menus";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    ArrowLeft,
    ArrowRight,
    userAvtor,
    bread,
  },
  emits: ["FoldChange"],
  name: "",
  setup(props, { emit }) {
    const isFolded = ref(false);
    const svgIcon = ref("arrow-left");
    const torggleIcon = () => {
      isFolded.value = !isFolded.value;
      emit("FoldChange", isFolded.value);
      if (!isFolded.value) {
        svgIcon.value = "arrow-left";
      } else {
        svgIcon.value = "arrow-right";
      }
    };
    const store = useStore();
    const route = useRoute();

    const breadCom = computed(() => {
      const roles = store.state.Login.rolesMenu;
      const path = route.path;
      return reBread(roles, path);
    });

    return {
      isFolded,
      svgIcon,
      torggleIcon,
      breadCom,
    };
  },
});
</script>
<style scoped>
.svgIcon {
  cursor: pointer;
}
.nav-header {
  display: flex;
  width: 100%;
  align-items: center;
}
.content {
  display: flex;
  margin-left: 10px;
  align-items: center;
  flex: 1;
  justify-content: space-between;
}
</style>
