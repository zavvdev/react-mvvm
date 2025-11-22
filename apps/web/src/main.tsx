import { createRoot } from "react-dom/client";
import { ApplicationView } from "@/Application/ApplicationView";
import { ErrorView } from "@/Application/ErrorView";
import { bootstrap } from "@/Bootstrap";

var appRootElement = document.getElementById("root")!;
var render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(ApplicationView, ErrorView)(import.meta.env);
