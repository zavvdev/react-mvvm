import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { withInjections } from "@/application/dependency-context";
import { AuthView } from "@/application/modules/auth/gateway/output";
import { DashboardView } from "@/application/modules/dashboard/gateway/output";
import { NotFoundView } from "@/application/modules/not-found/gateway/output";
import type { Config } from "@/core/types";

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
