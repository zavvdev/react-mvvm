import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { withInjections } from "@/Application/DependencyContext";
import { AuthView } from "@/Application/Modules/Auth";
import { DashboardView } from "@/Application/Modules/Dashboard";
import { NotFoundView } from "@/Application/Modules/NotFound";
import type { Config } from "@/Core/Types";

interface AppRoute {
  index?: boolean;
  path?: string;
  private?: boolean;
  element: React.ReactElement;
}

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

var AuthenticatedRoute = withInjections<
  "config" | "auth",
  {
    route: AppRoute;
  }
>(
  "config",
  "auth",
)(({ config, auth, route }) => {
  if (route.private && !auth.isLoggedIn()) {
    return <Navigate to={config.publicRoutes.auth()} />;
  }
  return route.element;
});

export var Router = withInjections<"config">("config")(({ config }) => {
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
});
