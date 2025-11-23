import { inject } from "@/Application/DependencyContext";

export var authViewModel = inject<"auth">("auth")(({ auth }) => {
  var clickLogin = () => {
    console.log("Login clicked");
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
});
