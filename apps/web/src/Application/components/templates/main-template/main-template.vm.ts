import type { MenuItem } from "@react-mvvm/uikit-web/templates/main-template/types";
import { inject } from "@/application/dependency-context";
// import { useNavigate } from "react-router";

export var MainTemplateViewModel = () =>
  inject<"auth" | "config">(
    "auth",
    "config",
  )(({ auth, config }) => {
    var isLoggedIn = auth.isLoggedIn();
    // var navigate = useNavigate();
    var navigate = (a: any) => a;

    var menu: Array<MenuItem> = [
      {
        id: "profile",
        label: "Profile",
        isVisible: isLoggedIn,
        onClick: () => navigate(config.privateRoutes.profile()),
      },
      {
        id: "settings",
        label: "Settings",
        isVisible: isLoggedIn,
        onClick: () => navigate(config.privateRoutes.settings()),
      },
      {
        id: "expenses",
        label: "Expenses",
        isVisible: isLoggedIn,
        onClick: () => navigate(config.privateRoutes.expenses()),
      },
      {
        id: "auth",
        label: "Auth",
        isVisible: !isLoggedIn,
        onClick: () => navigate(config.publicRoutes.auth()),
      },
    ];

    return {
      menu,
    };
  });

export type VM = ReturnType<typeof MainTemplateViewModel>;
