import type { PostModel } from "@react-mvvm/domain";
import type { Api } from "@react-mvvm/infrastructure";
import { useEffect, useEffectEvent, useState } from "react";
import { useNavigate } from "react-router";
import { inject } from "@/core/services/dependency-context.service";
import { shortenString } from "@/core/utilities/string";
import { PUBLIC_ROUTES } from "@/routes";

interface VMDependencies {
  api: Api;
}

const shortenBody = (post: PostModel): PostModel => ({
  ...post,
  body: shortenString(post.body),
});

export const useViewModel = ({ api }: VMDependencies) => {
  const { 0: posts, 1: setPosts } = useState<PostModel[]>([]);
  const { 0: loading, 1: setLoading } = useState(true);
  const { 0: error, 1: setError } = useState<string>("");

  const navigate = useNavigate();

  const fetchPosts = useEffectEvent(() => {
    setLoading(true);
    api.posts
      .getAll()
      .then((posts) => setPosts(posts.map(shortenBody)))
      .catch((err) => {
        setError(err.message || "An unknown error occurred");
        return [];
      })
      .finally(() => {
        setLoading(false);
      });
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const onViewPost = (postId: number) => {
    navigate(PUBLIC_ROUTES.post(postId));
  };

  return {
    posts,
    loading,
    error,
    success: !loading && !error,
    onViewPost,
  };
};

export const postsViewModel = () => inject<"api">("api")(useViewModel);
export type ViewModel = ReturnType<typeof postsViewModel>;
export type ViewModelResult = ReturnType<ReturnType<typeof postsViewModel>>;
