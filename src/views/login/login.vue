<template>
  <div class="login">
    <login-panle></login-panle>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import loginPanle from "./cpn/login-panle.vue";
export default defineComponent({
  name: "",
  components: {
    loginPanle,
  },
  // setup() {},
});
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background: url(../../assets/img/login-bg.svg);
}
</style>
