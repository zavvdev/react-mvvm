import { createRoot } from "react-dom/client";
import { bootstrap } from "@/bootstrap";
import { AppView } from "@/Core/AppView";
import { CrashView } from "@/Modules/Crash/View";

var appRootElement = document.getElementById("root")!;
var render = (app: React.ReactNode) => createRoot(appRootElement).render(app);

bootstrap(render)(AppView, CrashView)(import.meta.env);
