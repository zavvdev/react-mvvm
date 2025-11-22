import type { Auth } from "@react-mvvm/auth";
import { inject } from "@react-mvvm/di";
import type { Config } from "@/Core/Types";

export var authViewModel = () => {
  var config = inject<Config>("config");
  var auth = inject<Auth>("auth");

  var clickLogin = () => {
    console.log("Login clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  var clickRegister = () => {
    console.log("Register clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  var clickGetLoggedIn = () => {
    console.log("Is logged in:", auth.isLoggedIn());
  };

  return {
    clickLogin,
    clickRegister,
    clickGetLoggedIn,
  };
};

export type AuthViewModel = typeof authViewModel;
