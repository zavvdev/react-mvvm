import { createRoot } from "react-dom/client";
import { App } from "@/Core/App";
import { bootstrap } from "@/Core/Bootstrap.tsx";
import { CrashView } from "@/Modules/Crash/View";

var appRootElement = document.getElementById("root")!;

bootstrap((app) => createRoot(appRootElement).render(app))(App, CrashView)(
  import.meta.env,
);
