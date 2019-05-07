import { AxiosRequestConfig } from 'axios';

export class DefaultOpts {
  public url: string = null;

  public method?: 'get' | 'post' | 'delete' | 'put' | 'patch' = 'get';

  public params?: {
    [key: string]: any;
  } = {};

  public requestType?: 'json' | 'form' = 'json';

  public baseURL?: string = null;

  public transformRequest?: AxiosRequestConfig['transformRequest'] = null;

  public transformResponse?: AxiosRequestConfig['transformResponse'] = null;

  public headers?: AxiosRequestConfig['headers'] = null;

  public paramsSerializer?: AxiosRequestConfig['paramsSerializer'] = null;

  public timeout?: AxiosRequestConfig['timeout'] = null;

  public withCredentials?: AxiosRequestConfig['withCredentials'] = null;

  public adapter?: AxiosRequestConfig['adapter'] = null;

  public auth?: AxiosRequestConfig['auth'] = null;

  public responseType?: AxiosRequestConfig['responseType'] = null;

  public responseEncoding?: string = null;

  public xsrfCookieName?: AxiosRequestConfig['xsrfCookieName'] = null;

  public xsrfHeaderName?: AxiosRequestConfig['xsrfHeaderName'] = null;

  public onUploadProgress?: AxiosRequestConfig['onUploadProgress'] = null;

  public onDownloadProgress?: AxiosRequestConfig['onDownloadProgress'] = null;

  public maxContentLength?: AxiosRequestConfig['maxContentLength'] = null;

  public validateStatus?: AxiosRequestConfig['validateStatus'] = null;

  public maxRedirects?: AxiosRequestConfig['maxRedirects'] = null;

  public socketPath?: string = null;

  public httpAgent?: AxiosRequestConfig['httpAgent'] = null;

  public httpsAgent?: AxiosRequestConfig['httpsAgent'] = null;

  public proxy?: AxiosRequestConfig['proxy'] = null;

  public cancelToken?: AxiosRequestConfig['cancelToken'] = null;
}
