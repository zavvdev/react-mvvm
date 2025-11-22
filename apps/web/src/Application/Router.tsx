import type { Auth } from "@react-mvvm/auth";
import { inject } from "@react-mvvm/di";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import type { AppRoute, Config } from "@/Core/Types";
import { AuthView } from "@/Modules/Auth";
import { DashboardView } from "@/Modules/Dashboard";
import { NotFoundView } from "@/Modules/NotFound";

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

var AuthenticatedRoute = ({ route }: { route: AppRoute }) => {
  var auth = inject<Auth>("auth");
  var config = inject<Config>("config");

  if (route.private && !auth.isLoggedIn()) {
    return <Navigate to={config.publicRoutes.auth()} />;
  }
  return route.element;
};

export var Router = () => {
  var config = inject<Config>("config");

  return (
    <BrowserRouter>
      <Routes>
        {routes(config).map((route) => (
          <Route
            key={route.path}
            index={route.index}
            path={route.path}
            element={<AuthenticatedRoute route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
