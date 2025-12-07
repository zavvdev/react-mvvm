import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainTemplate } from "@/application/ui/components/templates/main-template/main-template.view";
import { NotFoundView } from "@/application/ui/views/not-found.view";
import { PostsView, PostView } from "@/posts/_gateway/output";

export const PUBLIC_ROUTES = {
  posts: () => "/posts",
  post: (id: string | number) => `/posts/${id}`,
};

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
    element: <PostsView />,
  },
  {
    path: PUBLIC_ROUTES.post(":id"),
    element: <PostView />,
  },
  {
    path: "*",
    element: <NotFoundView />,
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
          element={<MainTemplate> {route.element} </MainTemplate>}
        />
      ))}
    </Routes>
  </BrowserRouter>
);
