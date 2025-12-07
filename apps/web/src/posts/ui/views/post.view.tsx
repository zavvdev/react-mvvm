import { ErrorTile } from "@react-mvvm/uikit-web/atoms/error-tile";
import { Loading } from "@react-mvvm/uikit-web/atoms/loading";
import { withVM } from "@/application/infrastructure/services/dependency-context.service";
import { type PostViewModel, postViewModel } from "../view-models/post.vm";

interface Props {
  useViewModel: PostViewModel;
}

export const View = ({ useViewModel }: Props) => {
  const { post, loading, error, success } = useViewModel();

  return (
    <div>
      {loading && <Loading />}
      {error && <ErrorTile>{error}</ErrorTile>}
      {success && (
        <>
          <h1>{post?.title}</h1>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export const PostView = withVM<PostViewModel>(postViewModel)(View);
