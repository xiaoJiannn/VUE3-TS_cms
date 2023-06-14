<template>
  <el-dropdown>
    <el-avatar
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleExitClick">
          <el-icon><DeleteFilled /></el-icon>
          exit
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><User /></el-icon>
          info
        </el-dropdown-item>
        <el-dropdown-item>
          <el-icon><UserFilled /></el-icon>
          Manger
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { DeleteFilled, User, UserFilled } from "@element-plus/icons";
import localStroge from "@/utils/localStroge";
export default defineComponent({
  components: {
    DeleteFilled,
    User,
    UserFilled,
  },
  name: "",
  setup() {
    const router = useRouter();
    const handleExitClick = () => {
      localStroge.deleteUserAcount("token");
      router.push("/main");
    };
    return {
      handleExitClick,
    };
  },
});
</script>
<style scoped></style>
