import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainTemplate } from "@/core/components/templates/main-template/main-template.view";
import { Counter } from "@/modules/counter/_gateway/output";
import { NotFound } from "@/modules/not-found/_gateway/output";
import { Post, Posts } from "@/modules/posts/_gateway/output";
import { PUBLIC_ROUTES } from "@/routes";

interface AppRoute {
  index?: boolean;
  path?: string;
  element: React.ReactElement;
}

const ROUTES: Array<AppRoute> = [
  {
    index: true,
    path: "/",
    element: <Navigate to={PUBLIC_ROUTES.posts()} replace />,
  },
  {
    path: PUBLIC_ROUTES.posts(),
    element: <Posts />,
  },
  {
    path: PUBLIC_ROUTES.post(":id"),
    element: <Post />,
  },
  {
    path: PUBLIC_ROUTES.counter(),
    element: <Counter />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={route.path}
          index={route.index}
          path={route.path}
          element={<MainTemplate>{route.element}</MainTemplate>}
        />
      ))}
    </Routes>
  </BrowserRouter>
);
