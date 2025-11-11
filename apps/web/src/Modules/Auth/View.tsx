import { inject } from "@/di";
import type { AuthViewModel } from "./ViewModel";

export var AuthView = () => {
  var { clickLogin, clickRegister } = inject<AuthViewModel>("AuthViewModel")();

  return (
    <div>
      Auth View Component
      <button type="button" onClick={clickLogin}>
        Login
      </button>
      <button type="button" onClick={clickRegister}>
        Register
      </button>
      <input placeholder="Password" />
    </div>
  );
};
