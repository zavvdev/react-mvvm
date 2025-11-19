import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import type { AuthService } from "@react-mvvm/auth-service";
import { inject } from "@react-mvvm/di-container";
import type { AppRoute, Config } from "@/Core/Types";
import { AuthView } from "@/Modules/Auth/View";
import { DashboardView } from "@/Modules/Dashboard/View";
import { NotFoundView } from "@/Modules/NotFound/View";

var routes = ({ privateRoutes, publicRoutes }: Config): Array<AppRoute> => [
  {
    index: true,
    path: "/",
    private: true,
    element: <Navigate to={privateRoutes.dashboard()} replace />,
  },
  {
    path: privateRoutes.dashboard(),
    private: true,
    element: <DashboardView />,
  },
  {
    path: publicRoutes.auth(),
    private: false,
    element: <AuthView />,
  },
  {
    path: "*",
    private: false,
    element: <NotFoundView />,
  },
];

export var Router = () => {
  var authService = inject<AuthService>("authService");
  var config = inject<Config>("config");

  var renderElement = (route: AppRoute) => {
    if (route.private && !authService.isLoggedIn()) {
      return <Navigate to={config.publicRoutes.auth()} />;
    }
    return route.element;
  };

  return (
    <BrowserRouter>
      <Routes>
        {routes(config).map((route, index) => (
          <Route
            key={index}
            index={route.index}
            path={route.path}
            element={renderElement(route)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
