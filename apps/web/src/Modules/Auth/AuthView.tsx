import { inject } from "@react-mvvm/di";
import type { AuthViewModel } from "./AuthViewModel";

export var AuthView = () => {
  var { clickLogin, clickRegister, clickGetLoggedIn } =
    inject<AuthViewModel>("authViewModel")();

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
