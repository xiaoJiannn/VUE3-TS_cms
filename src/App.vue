<template>
  <el-config-provider :locale="zhCn">
    <div class="app">
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
export default defineComponent({
  name: "",
  components: {},
  setup() {
    return {
      zhCn,
    };
  },
});
</script>
<style scoped>
.app {
  height: 100vh;
  /* width: 100%; */
}
</style>
