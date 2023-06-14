<template>
  <el-form :rules="rule" :model="accountInfo">
    <el-form-item label="手机" prop="name">
      <el-input v-model="accountInfo.name"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code" class="send-code">
      <el-input v-model="accountInfo.code" class="code-input"></el-input>
      <el-button type="primary" @click="sendCode">send</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { rule } from "./config/account-config";
export default defineComponent({
  name: "",
  setup() {
    const store = useStore();
    const accountInfo = reactive({
      name: "",
      code: "",
    });
    const sendCode = () => {
      store.dispatch("LoginModule/loginAction", { ...accountInfo });
    };
    return {
      accountInfo,
      rule,
      sendCode,
    };
  },
});
</script>
<style scoped>
.send-code {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.code-input {
  margin-right: 10px;
}
</style>
