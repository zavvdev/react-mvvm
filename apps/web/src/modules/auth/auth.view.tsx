import { withVM } from "@/core/dependency-context";
import { authViewModel, type ViewModel } from "./auth.vm";

interface Props {
  useViewModel: ViewModel;
}

var View = ({ useViewModel }: Props) => {
  var { clickLogin, clickRegister, clickGetLoggedIn } = useViewModel();

  return (
    <div>
      Auth View Component
      <button type="button" onClick={clickLogin}>
        Login
      </button>
      <button type="button" onClick={clickRegister}>
        Register
      </button>
      <button type="button" onClick={clickGetLoggedIn}>
        get is logged in
      </button>
      <input placeholder="Password" />
    </div>
  );
};

export var AuthView = withVM<ViewModel>(authViewModel)(View);
