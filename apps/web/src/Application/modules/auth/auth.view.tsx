import { withVM } from "@/application/dependency-context";
import { AuthViewModel, type VM } from "./auth.vm.tsx";

export var AuthView = withVM<VM>(AuthViewModel)(({ viewModel }) => {
  var { clickLogin, clickRegister, clickGetLoggedIn } = viewModel();

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
});
