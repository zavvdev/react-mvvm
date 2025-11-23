import { createRoot } from "react-dom/client";
import { ApplicationView } from "@/Application/ApplicationView";
import { bootstrap } from "@/Application/Bootstrap";
import { ErrorView } from "@/Application/Modules/Error";

var appRootElement = document.getElementById("root")!;
var render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(ApplicationView, ErrorView)(import.meta.env);
