import type { PostModel } from "@react-mvvm/domain";
import type { Api } from "@react-mvvm/infrastructure";
import { useEffect, useEffectEvent, useState } from "react";
import { useParams } from "react-router";
import { inject } from "@/core/services/dependency-context.service";

interface VMDependencies {
  api: Api;
}

export const useViewModel = ({ api }: VMDependencies) => {
  const { 0: post, 1: setPost } = useState<PostModel | null>(null);
  const { 0: loading, 1: setLoading } = useState(true);
  const { 0: error, 1: setError } = useState<string>("");

  const params = useParams();

  const fetchPost = useEffectEvent(() => {
    setLoading(true);
    if (params.id) {
      api.posts
        .getOne({
          id: params.id,
        })
        .then(setPost)
        .catch((err) => {
          setError(err.message || "An unknown error occurred");
          return null;
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  useEffect(() => {
    fetchPost();
  }, []);

  return {
    post,
    loading,
    error,
    success: !loading && !error && post !== null,
  };
};

export const postViewModel = () => inject<"api">("api")(useViewModel);
export type ViewModel = ReturnType<typeof postViewModel>;
export type ViewModelResult = ReturnType<ReturnType<typeof postViewModel>>;
