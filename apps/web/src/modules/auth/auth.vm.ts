import type { Auth } from "@react-mvvm/infrastructure";
import { inject } from "@/core/dependency-context";

interface VMDependencies {
  auth: Auth;
}

interface Params {
  some: string;
}

var useViewModel = ({ auth, some }: VMDependencies & Params) => {
  var clickLogin = () => {
    console.log("Login clicked", some);
  };

  var clickRegister = () => {
    console.log("Register clicked");
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

export var authViewModel = () => inject<"auth", Params>("auth")(useViewModel);

export type ViewModel = ReturnType<typeof authViewModel>;
