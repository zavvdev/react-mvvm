import { createRoot } from "react-dom/client";
import { ApplicationView } from "@/application/application.view";
import { bootstrap } from "@/application/bootstrap";
import { ErrorView } from "@/application/modules/error/gateway/output";

var appRootElement = document.getElementById("root")!;
var render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(ApplicationView, ErrorView)(import.meta.env);
