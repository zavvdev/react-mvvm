import type { PostModel } from "@react-mvvm/domain";
import type { Api } from "@react-mvvm/infrastructure";
import { useEffect, useEffectEvent, useState } from "react";
import { catchError, finalize, map } from "rxjs";
import { inject } from "@/core/services/dependency-context.service";

interface VMDependencies {
  api: Api;
}

const shortenBody = (post: PostModel): PostModel => ({
  ...post,
  body: post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body,
});

const useViewModel = ({ api }: VMDependencies) => {
  const { 0: posts, 1: setPosts } = useState<PostModel[]>([]);
  const { 0: loading, 1: setLoading } = useState(true);
  const { 0: error, 1: setError } = useState<string>("");

  const fetchPosts = useEffectEvent(() => {
    setLoading(true);
    api.posts
      .getAll$()
      .pipe(
        map((posts) => posts.map(shortenBody)),
        catchError((err) => {
          setError(err.message || "An unknown error occurred");
          return [];
        }),
        finalize(() => setLoading(false)),
      )
      .subscribe(setPosts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    fetchPosts,
    loading,
    error,
    success: !loading && !error,
  };
};

export const postsViewModel = () => inject<"api">("api")(useViewModel);
export type ViewModel = ReturnType<typeof postsViewModel>;
