import type { Config } from "@/Core/Types/Config";
import { inject, injectable } from "@/di";

var authViewModel = () => {
  var config = inject<Config>("Config");

  var clickLogin = () => {
    console.log("Login clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  var clickRegister = () => {
    console.log("Register clicked");
    console.log("API URL from config:", config.apiUrl);
  };

  return {
    clickLogin,
    clickRegister,
  };
};

injectable("AuthViewModel", () => authViewModel, { singleton: true });

export type AuthViewModel = typeof authViewModel;
