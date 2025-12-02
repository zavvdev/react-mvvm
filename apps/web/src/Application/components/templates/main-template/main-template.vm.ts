import type { MenuItem } from "@react-mvvm/uikit-web/templates/main-template/types";
import { inject } from "@/application/dependency-context";

export var MainTemplateViewModel = () =>
  inject<"auth">("auth")(({ auth }) => {
    var isLoggedIn = auth.isLoggedIn();

    var menu: Array<MenuItem> = [
      {
        id: "profile",
        label: "Profile",
        isVisible: isLoggedIn,
        onClick: () => {},
      },
      {
        id: "settings",
        label: "Settings",
        isVisible: isLoggedIn,
        onClick: () => {},
      },
      {
        id: "expenses",
        label: "Expenses",
        isVisible: isLoggedIn,
        onClick: () => {},
      },
      {
        id: "login",
        label: "Login",
        isVisible: !isLoggedIn,
        onClick: () => {},
      },
      {
        id: "register",
        label: "Register",
        isVisible: !isLoggedIn,
        onClick: () => {},
      },
    ];

    return {
      menu,
    };
  });

export type VM = ReturnType<typeof MainTemplateViewModel>;
