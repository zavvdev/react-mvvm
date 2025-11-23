import { authViewModel } from "./AuthViewModel";

export var AuthView = () => {
  var { clickLogin, clickRegister, clickGetLoggedIn } = authViewModel();

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
