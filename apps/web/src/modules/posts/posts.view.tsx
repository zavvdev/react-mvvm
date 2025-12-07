import { ErrorTile } from "@react-mvvm/uikit-web/atoms/error-tile";
import { Loading } from "@react-mvvm/uikit-web/atoms/loading";
import { withVM } from "@/core/services/dependency-context.service";
import { PostTile } from "./components/atoms/post-tile/post-tile.view";
import styles from "./posts.module.css";
import { postsViewModel, type ViewModel } from "./posts.vm";

interface Props {
  useViewModel: ViewModel;
}

const View = ({ useViewModel }: Props) => {
  const { posts, loading, error, success, onViewPost } = useViewModel();

  return (
    <div className={styles.root}>
      <h1>Posts</h1>
      {loading && <Loading />}
      {error && <ErrorTile>{error}</ErrorTile>}
      {success &&
        posts.map((post) => (
          <PostTile
            key={post.id}
            title={post.title}
            body={post.body}
            onOpen={() => onViewPost(post.id)}
          />
        ))}
    </div>
  );
};

export const Posts = withVM<ViewModel>(postsViewModel)(View);
