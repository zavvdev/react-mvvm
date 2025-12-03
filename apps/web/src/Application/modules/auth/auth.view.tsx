import { withVM } from "@/application/dependency-context";
import { AuthViewModel, type ViewModel } from "./auth.vm.tsx";

export var AuthView = withVM<ViewModel>(() => AuthViewModel)(
  ({ useViewModel }) => {
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
  },
);
