import "@react-mvvm/uikit-web/styles.css";
import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import { DependenciesContext } from "@/Application/DependencyContext";
import { Router } from "@/Application/Router";
import type { CoreDependencies } from "@/Core/Bootstrap";

interface ApplicationViewProps {
  dependencies: CoreDependencies;
}

export var ApplicationView = ({ dependencies }: ApplicationViewProps) => (
  <DependenciesContext.Provider value={dependencies}>
    <MainTemplate>
      <Router />
    </MainTemplate>
  </DependenciesContext.Provider>
);
