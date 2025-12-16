import { createRoot } from "react-dom/client";
import { ApplicationView } from "@/ui/views/application.view.tsx";
import { ErrorBoundaryView } from "@/ui/views/error-boundary.view";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundaryView>
    <ApplicationView />
  </ErrorBoundaryView>,
);
