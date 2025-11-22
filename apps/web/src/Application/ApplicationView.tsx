import "@react-mvvm/uikit-web/dist/uikit-web.css";
import { Router } from "@/Application/Router";
import { CrashView } from "@/Modules/Crash";

export var ErrorView = CrashView;

export var ApplicationView = () => <Router />;
