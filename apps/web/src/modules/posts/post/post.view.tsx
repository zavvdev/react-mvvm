import { ErrorTile } from "@react-mvvm/uikit-web/atoms/error-tile";
import { Loading } from "@react-mvvm/uikit-web/atoms/loading";
import { withVM } from "@/core/services/dependency-context.service";
import { postViewModel, type ViewModel } from "./post.vm";

interface Props {
  useViewModel: ViewModel;
}

const View = ({ useViewModel }: Props) => {
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

export const Post = withVM<ViewModel>(postViewModel)(View);
