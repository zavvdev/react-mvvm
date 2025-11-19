import type { AuthService } from "@react-mvvm/auth-service";
import { inject } from "@react-mvvm/di-container";
import type { Config } from "@/Core/Types";

export var authViewModel = () => {
  var config = inject<Config>("config");
  var authService = inject<AuthService>("authService");

  var clickLogin = () => {
    console.log("Login clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  var clickRegister = () => {
    console.log("Register clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  var clickGetLoggedIn = () => {
    console.log("Is logged in:", authService.isLoggedIn());
  };

  return {
    clickLogin,
    clickRegister,
    clickGetLoggedIn,
  };
};

export type AuthViewModel = typeof authViewModel;
