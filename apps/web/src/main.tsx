import { createRoot } from "react-dom/client";
import { bootstrap } from "@/application/bootstrap";
import { useApplicationViewModel } from "@/application/ui/view-models/application.vm";
import { ApplicationView } from "@/application/ui/views/application.view";

const appRootElement = document.getElementById("root")!;
const render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(() => (
  <ApplicationView
    env={import.meta.env}
    useViewModel={useApplicationViewModel}
  />
));
