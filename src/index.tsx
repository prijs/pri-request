import axios, { AxiosRequestConfig } from 'axios';
import { stringify } from 'query-string';
import * as _ from 'lodash';
import { DefaultOpts } from './default-opts';

export default async function request(opts: DefaultOpts) {
  opts = _.defaults(opts || {}, new DefaultOpts());

  const axiosRequestConfig: AxiosRequestConfig = {};

  axiosRequestConfig.url = opts.url;

  if (opts.method) {
    axiosRequestConfig.method = opts.method;
  }

  if (opts.baseURL) {
    axiosRequestConfig.baseURL = opts.baseURL;
  }

  if (opts.transformRequest) {
    axiosRequestConfig.transformRequest = opts.transformRequest;
  }
  if (opts.transformResponse) {
    axiosRequestConfig.transformResponse = opts.transformResponse;
  }
  if (opts.headers) {
    axiosRequestConfig.headers = opts.headers;
  }
  if (opts.paramsSerializer) {
    axiosRequestConfig.paramsSerializer = opts.paramsSerializer;
  }
  if (opts.timeout) {
    axiosRequestConfig.timeout = opts.timeout;
  }
  if (opts.withCredentials) {
    axiosRequestConfig.withCredentials = opts.withCredentials;
  }
  if (opts.adapter) {
    axiosRequestConfig.adapter = opts.adapter;
  }
  if (opts.auth) {
    axiosRequestConfig.auth = opts.auth;
  }
  if (opts.responseType) {
    axiosRequestConfig.responseType = opts.responseType;
  }
  if (opts.responseEncoding) {
    (axiosRequestConfig as any).responseEncoding = opts.responseEncoding;
  }
  if (opts.xsrfHeaderName) {
    axiosRequestConfig.xsrfHeaderName = opts.xsrfHeaderName;
  }
  if (opts.onUploadProgress) {
    axiosRequestConfig.onUploadProgress = opts.onUploadProgress;
  }
  if (opts.onDownloadProgress) {
    axiosRequestConfig.onDownloadProgress = opts.onDownloadProgress;
  }
  if (opts.maxContentLength) {
    axiosRequestConfig.maxContentLength = opts.maxContentLength;
  }
  if (opts.validateStatus) {
    axiosRequestConfig.validateStatus = opts.validateStatus;
  }
  if (opts.maxRedirects) {
    axiosRequestConfig.maxRedirects = opts.maxRedirects;
  }
  if (opts.socketPath) {
    (axiosRequestConfig as any).socketPath = opts.socketPath;
  }
  if (opts.httpAgent) {
    axiosRequestConfig.httpAgent = opts.httpAgent;
  }
  if (opts.httpsAgent) {
    axiosRequestConfig.httpsAgent = opts.httpsAgent;
  }
  if (opts.proxy) {
    axiosRequestConfig.proxy = opts.proxy;
  }
  if (opts.cancelToken) {
    axiosRequestConfig.cancelToken = opts.cancelToken;
  }

  switch (opts.method) {
    case 'get':
      axiosRequestConfig.params = opts.params;
      break;
    default:
      switch (opts.requestType) {
        case 'form':
          {
            axiosRequestConfig.headers = {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
              ...opts.headers
            };

            const params = _.cloneDeep(opts.params) || {};

            Object.keys(params).forEach(property => {
              if (typeof params[property] === 'object') {
                params[property] = encodeURIComponent(JSON.stringify(params[property]));
              }
            });

            axiosRequestConfig.data = stringify(params);
          }
          break;
        case 'json':
          axiosRequestConfig.headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            ...(opts.headers && opts.headers)
          };

          axiosRequestConfig.data = opts.params;
          break;
        default:
      }
  }

  const result = await axios(axiosRequestConfig);

  return result;
}

export { axios };
