<template>
  <div class="login-panle">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><UserFilled></UserFilled></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>电话登陆</span>
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="login-below">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginClick"
      >LOGIN</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { UserFilled, Iphone } from "@element-plus/icons-vue";
import loginAccount from "./login-account.vue";
import loginPhone from "./login-phone.vue";

export default defineComponent({
  components: {
    UserFilled,
    Iphone,
    loginAccount,
    loginPhone,
  },
  name: "",
  setup() {
    const isKeepPassword = ref(true);
    const accountRef = ref<InstanceType<typeof loginAccount>>();
    const loginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value);
      // if (!isKeepPassword.value) {
      //   accountRef.value?.NotRemember();
      // }
      console.log("ask for loign");
    };
    return {
      accountRef,
      isKeepPassword,
      loginClick,
    };
  },
});
</script>
<style scoped>
.login-panle {
  width: 320px;
  margin-bottom: 40px;
}
.title {
  text-align: center;
}
.login-below {
  display: flex;
  justify-content: space-around;
}
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
