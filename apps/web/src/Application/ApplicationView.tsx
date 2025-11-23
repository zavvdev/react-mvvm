import "@react-mvvm/uikit-web/dist/uikit-web.css";
import { DependenciesContext } from "@/Application/DependencyContext";
import { Router } from "@/Application/Router";
import type { CoreDependencies } from "@/Core/Bootstrap";

interface ApplicationViewProps {
  dependencies: CoreDependencies;
}

export var ApplicationView = ({ dependencies }: ApplicationViewProps) => (
  <DependenciesContext.Provider value={dependencies}>
    <Router />
  </DependenciesContext.Provider>
);
