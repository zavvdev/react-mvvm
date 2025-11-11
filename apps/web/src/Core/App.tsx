import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "@/Core/Styles/Main.css";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/Core/Routes";
import { AuthView } from "@/Modules/Auth/View";
import { DashboardView } from "@/Modules/Dashboard/View";
import { NotFoundView } from "@/Modules/NotFound/View";

export var App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={<Navigate to={PRIVATE_ROUTES.dashboard()} replace />}
      />
      <Route path={PRIVATE_ROUTES.dashboard()} element={<DashboardView />} />
      <Route path={PUBLIC_ROUTES.auth()} element={<AuthView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);
