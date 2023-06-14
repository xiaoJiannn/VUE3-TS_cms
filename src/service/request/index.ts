import axios from "axios";
import type { AxiosInstance } from "axios";
import type { WJrequestInterceptors, WJrequestConfig } from "./type";
import { ElLoading } from "element-plus/lib/components/loading/index";
import { LoadingInstance } from "element-plus/es/components/loading/src/loading";
class WJrequest {
  instance: AxiosInstance;
  interceptors?: WJrequestInterceptors;
  loading?: LoadingInstance;
  isShowLoading?: boolean;
  constructor(config: WJrequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.isShowLoading = config.isShowLoading ?? true;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responeInterceptor,
      this.interceptors?.responeInterceptorCatch
    );

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "loading",
          });
        }
        return config;
      },
      (err) => {
        console.log(err);
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        setTimeout(() => {
          this.loading?.close();
        }, 1000);

        return res.data;
      },
      (err) => {
        // if (err.response.status) {
        // }
        return err;
      }
    );
  }
  request<T>(config: WJrequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.isShowLoading) {
        this.isShowLoading = config.isShowLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res);
          // console.log(res);
        })
        .catch((err) => {
          // console.log(err);
          reject(err);
        });
    });
  }
  get(config: any): Promise<any> {
    return this.request({ ...config, method: "GET" });
  }

  post(config: any): Promise<any> {
    return this.request({ ...config, method: "POST" });
  }

  delete<T>(config: WJrequestConfig): Promise<any> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T>(config: WJrequestConfig): Promise<any> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}
export default WJrequest;
