import { inject } from "@react-mvvm/di-container";
import type { AuthViewModel } from "./ViewModel";

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
