import type { Auth } from "@react-mvvm/infrastructure";
import type { MenuItem } from "@react-mvvm/uikit-web/templates/main-template/types";
import { useNavigate } from "react-router";
import { inject } from "@/core/dependency-context";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";

interface VMDependencies {
  auth: Auth;
}

var useViewModel = ({ auth }: VMDependencies) => {
  var isLoggedIn = auth.isLoggedIn();
  var navigate = useNavigate();

  var menu: Array<MenuItem> = [
    {
      id: "profile",
      label: "Profile",
      isVisible: isLoggedIn,
      onClick: () => navigate(PRIVATE_ROUTES.profile()),
    },
    {
      id: "settings",
      label: "Settings",
      isVisible: isLoggedIn,
      onClick: () => navigate(PRIVATE_ROUTES.settings()),
    },
    {
      id: "expenses",
      label: "Expenses",
      isVisible: isLoggedIn,
      onClick: () => navigate(PRIVATE_ROUTES.expenses()),
    },
    {
      id: "auth",
      label: "Auth",
      isVisible: !isLoggedIn,
      onClick: () => navigate(PUBLIC_ROUTES.auth()),
    },
  ];

  return {
    menu,
  };
};

export var mainTemplateViewModel = () => inject<"auth">("auth")(useViewModel);

export type ViewModel = ReturnType<typeof mainTemplateViewModel>;
