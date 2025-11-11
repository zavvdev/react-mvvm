import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "@/Core/Styles/Main.css";
import { AuthView } from "@/Modules/Auth/View";
import { DashboardView } from "@/Modules/Dashboard/View";
import { NotFoundView } from "@/Modules/NotFound/View";

export var App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Navigate to="dashboard" replace />} />
      <Route path="dashboard" element={<DashboardView />} />
      <Route path="auth" element={<AuthView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  </BrowserRouter>
);
