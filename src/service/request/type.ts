import type {
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
export interface WJrequestInterceptors {
  requestInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorCatch?: (erro: any) => any;
  responeInterceptor?: (res: AxiosResponse | any) => AxiosResponse | any;
  responeInterceptorCatch?: (erro: any) => any;
}
export interface WJrequestConfig extends AxiosRequestConfig {
  interceptors?: WJrequestInterceptors;
  isShowLoading?: boolean;
}
