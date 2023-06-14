import WJrequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localStroge from "@/utils/localStroge";
const wjRequest = new WJrequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localStroge.getUserAcount("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorCatch: (erro) => {
      console.log("success");
      return erro;
    },
    responeInterceptor: (res) => {
      console.log("success");
      return res;
    },
    responeInterceptorCatch: (erro) => {
      console.log("success");
      return erro;
    },
  },
});
// 创建不同的axios实例
// export const wjRequest2 = new WJrequest({});
export default wjRequest;
