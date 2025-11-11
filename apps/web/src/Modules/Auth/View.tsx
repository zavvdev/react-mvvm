import { type AuthViewModel } from "./ViewModel";
import { inject } from "@/di";

export var AuthView = () => {
  var { clickLogin, clickRegister } = inject<AuthViewModel>("AuthViewModel")();

  return (
    <div>
      Auth View Component
      <button onClick={clickLogin}>Login</button>
      <button onClick={clickRegister}>Register</button>
      <input placeholder="Password" />
    </div>
  );
};
