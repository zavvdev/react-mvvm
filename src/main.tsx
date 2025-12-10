import { createRoot } from "react-dom/client";
import { ApplicationView } from "@/_shared/ui/views/application.view.tsx";
import { ErrorBoundaryView } from "@/_shared/ui/views/error-boundary.view";

createRoot(document.getElementById("root")!).render(
  <ErrorBoundaryView>
    <ApplicationView />
  </ErrorBoundaryView>,
);
