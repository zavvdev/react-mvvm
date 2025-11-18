import { createRoot } from "react-dom/client";
import { bootstrap } from "@/bootstrap";
import { App } from "@/Core/App";
import { CrashView } from "@/Modules/Crash/View";

var appRootElement = document.getElementById("root")!;

bootstrap((app) => createRoot(appRootElement).render(app))(App, CrashView)(
  import.meta.env,
);
