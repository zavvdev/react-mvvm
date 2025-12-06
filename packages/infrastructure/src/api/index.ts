import type { Http } from "../http";
import { createPostsApi } from "./posts";

export var createApi = (http: Http) => {
  return {
    posts: createPostsApi(http),
  };
};

export type Api = ReturnType<typeof createApi>;
