import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { PUBLIC_ROUTES } from "@/_router/router.config";
import { MainTemplate } from "@/ui/components/templates/main/main.template";
import { BooksView } from "@/ui/views/books.view";
import { CartView } from "@/ui/views/cart.view";
import { NotFoundView } from "@/ui/views/not-found.view";
import { OrderView } from "@/ui/views/order.view";

interface AppRoute {
  index?: boolean;
  path?: string;
  element: React.ReactElement;
}

const ROUTES: Array<AppRoute> = [
  {
    index: true,
    path: "/",
    element: <Navigate to={PUBLIC_ROUTES.books()} replace />,
  },
  {
    path: PUBLIC_ROUTES.books(),
    element: <BooksView />,
  },
  {
    path: PUBLIC_ROUTES.cart(),
    element: <CartView />,
  },
  {
    path: PUBLIC_ROUTES.order(),
    element: <OrderView />,
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
          element={<MainTemplate>{route.element}</MainTemplate>}
        />
      ))}
    </Routes>
  </BrowserRouter>
);
