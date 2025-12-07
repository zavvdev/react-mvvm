import { createRoot } from "react-dom/client";
import { Application } from "@/application/application.view";
import { bootstrap } from "@/application/bootstrap";
import { Crash } from "@/modules/crash/_gateway/output";

const appRootElement = document.getElementById("root")!;
const render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(Application, Crash)(import.meta.env);
