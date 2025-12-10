import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { PUBLIC_ROUTES } from "@/__router/router.config";
import { MainTemplate } from "@/_shared/ui/components/templates/main/main";
import { NotFoundView } from "@/_shared/ui/views/not-found.view";
import { CartView } from "@/_shared/ui/views/cart.view";
import { BooksView } from "@/books/_gateway/output";
import { OrderView } from "@/order/_gateway/output";

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
