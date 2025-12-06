import axios from "axios";
import { defer, from, map } from "rxjs";
export class Http {
  constructor(repo) {
    this.repo = repo;
  }
  reqConfigAdapter(cfg) {
    return {
      baseURL: cfg?.baseUrl,
      headers: cfg?.headers,
      params: cfg?.params,
      withCredentials: cfg?.withCredentials,
    };
  }
  resAdapter(res) {
    return res.data;
  }
  get$(url, config) {
    return defer(() =>
      from(this.repo.get(url, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
  post$(url, data, config) {
    return defer(() =>
      from(this.repo.post(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
  put$(url, data, config) {
    return defer(() =>
      from(this.repo.put(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
  patch$(url, data, config) {
    return defer(() =>
      from(this.repo.patch(url, data, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
  delete$(url, config) {
    return defer(() =>
      from(this.repo.delete(url, this.reqConfigAdapter(config))).pipe(
        map(this.resAdapter.bind(this)),
      ),
    );
  }
}
export var createHttp = (config) => {
  var client = axios.create({
    baseURL: config.baseUrl,
    headers: config.headers,
    withCredentials: config.withCredentials,
  });
  client.interceptors.response.use(
    (res) => {
      if (config.onResponseSuccess) {
        return config
          .onResponseSuccess({
            data: res.data,
            status: res.status,
            statusText: res.statusText,
            headers: res.headers,
          })
          .then((modified) => {
            return {
              ...res,
              ...modified,
            };
          });
      }
      return res;
    },
    (error) => {
      if (config.onResponseError) {
        return config
          .onResponseError({
            code: error.code,
            response: error.response
              ? {
                  data: error.response.data,
                  status: error.response.status,
                  statusText: error.response.statusText,
                  headers: error.response.headers,
                }
              : undefined,
          })
          .then((modified) => {
            return Promise.reject({
              ...error,
              ...modified,
            });
          });
      }
      return Promise.reject(error);
    },
  );
  client.interceptors.request.use((req) => {
    if (config.onRequest) {
      return config
        .onRequest({
          baseUrl: req.baseURL,
          params: req.params,
          withCredentials: req.withCredentials,
          headers: req.headers,
        })
        .then((modified) => {
          return {
            ...req,
            ...modified,
          };
        });
    }
    return req;
  });
  return new Http(client);
};
