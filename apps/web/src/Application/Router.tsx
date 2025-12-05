import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainTemplateView } from "@/application/components/templates/main-template/main-template.view";
import { withInjections } from "@/application/dependency-context";
import { AuthView } from "@/application/modules/auth/gateway/output";
import { ExpensesView } from "@/application/modules/expenses/gateway/output";
import { NotFoundView } from "@/application/modules/not-found/gateway/output";
import { ProfileView } from "@/application/modules/profile/gateway/output";
import { SettingsView } from "@/application/modules/settings/gateway/output";
import type { Config } from "@/infrastructure/types";

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
    element: <Navigate to={privateRoutes.expenses()} replace />,
  },
  {
    path: privateRoutes.profile(),
    private: true,
    element: <ProfileView />,
  },
  {
    path: privateRoutes.settings(),
    private: true,
    element: <SettingsView />,
  },
  {
    path: privateRoutes.expenses(),
    private: true,
    element: <ExpensesView />,
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

var AppRoute = withInjections<
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
  return <MainTemplateView>{route.element}</MainTemplateView>;
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
            element={<AppRoute route={route} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
});
