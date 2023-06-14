<template>
  <el-form :rules="rule" :model="accountInfo" ref="formRef">
    <el-form-item label="账号" prop="name">
      <el-input v-model="accountInfo.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="accountInfo.password" show-password></el-input>
    </el-form-item>
  </el-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { ElForm } from "element-plus";
import { rule } from "./config/account-config";
import localStroge from "@/utils/localStroge";
export default defineComponent({
  name: "",
  setup() {
    const store = useStore();
    const formRef = ref<InstanceType<typeof ElForm>>();
    const accountInfo = reactive({
      name: localStroge.getUserAcount("name") ?? " ",
      password: localStroge.getUserAcount("password") ?? " ",
    });
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localStroge.setUserAccount("name", accountInfo.name);
            localStroge.setUserAccount("password", accountInfo.password);
            console.log(store);

            store.dispatch("Login/loginAction", { ...accountInfo });
          }
        }
      });
    };
    // const NotRemember = () => {
    //   localStroge.deleteUserAcount("name");
    //   localStroge.deleteUserAcount("password");
    // };
    return {
      accountInfo,
      rule,
      formRef,
      loginAction,
      // NotRemember,
    };
  },
});
</script>
<style scoped></style>
