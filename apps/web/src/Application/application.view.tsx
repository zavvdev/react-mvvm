import "@react-mvvm/uikit-web/styles.css";
import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import { DependenciesContext } from "@/application/dependency-context";
import { Router } from "@/application/router";
import type { CoreDependencies } from "@/core/bootstrap";

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
