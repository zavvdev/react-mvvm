import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainTemplateView } from "@/core/components/templates/main-template/main-template.view";
import { withInjections } from "@/core/dependency-context";
import { AuthView } from "@/modules/auth/gateway/output";
import { ExpensesView } from "@/modules/expenses/gateway/output";
import { NotFoundView } from "@/modules/not-found/gateway/output";
import { ProfileView } from "@/modules/profile/gateway/output";
import { SettingsView } from "@/modules/settings/gateway/output";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/routes";

interface AppRoute {
  index?: boolean;
  path?: string;
  private?: boolean;
  element: React.ReactElement;
}

var routes = (): Array<AppRoute> => [
  {
    index: true,
    path: "/",
    private: true,
    element: <Navigate to={PRIVATE_ROUTES.expenses()} replace />,
  },
  {
    path: PRIVATE_ROUTES.profile(),
    private: true,
    element: <ProfileView />,
  },
  {
    path: PRIVATE_ROUTES.settings(),
    private: true,
    element: <SettingsView />,
  },
  {
    path: PRIVATE_ROUTES.expenses(),
    private: true,
    element: <ExpensesView />,
  },
  {
    path: PUBLIC_ROUTES.auth(),
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
  "auth",
  {
    route: AppRoute;
  }
>("auth")(({ auth, route }) => {
  if (route.private && !auth.isLoggedIn()) {
    return <Navigate to={PUBLIC_ROUTES.auth()} />;
  }
  return <MainTemplateView>{route.element}</MainTemplateView>;
});

export var Router = () => (
  <BrowserRouter>
    <Routes>
      {routes().map((route) => (
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
