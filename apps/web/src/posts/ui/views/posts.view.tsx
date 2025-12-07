import { ErrorTile } from "@react-mvvm/uikit-web/atoms/error-tile";
import { Loading } from "@react-mvvm/uikit-web/atoms/loading";
import { withVM } from "@/application/infrastructure/services/dependency-context.service";
import { Post } from "@/posts/ui/components/atoms/post/post.view";
import { type PostsViewModel, postsViewModel } from "../view-models/posts.vm";
import styles from "./styles/posts.module.css";

interface Props {
  useViewModel: PostsViewModel;
}

export const View = ({ useViewModel }: Props) => {
  const { posts, loading, error, success, onViewPost } = useViewModel();

  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      {loading && <Loading />}
      {error && <ErrorTile>{error}</ErrorTile>}
      {success &&
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            onOpen={() => onViewPost(post.id)}
          />
        ))}
    </div>
  );
};

export const PostsView = withVM<PostsViewModel>(postsViewModel)(View);
