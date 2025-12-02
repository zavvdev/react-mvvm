import "@react-mvvm/uikit-web/styles.css";
import { DependenciesContext } from "@/application/dependency-context";
import { Router } from "@/application/router";
import type { CoreDependencies } from "@/core/bootstrap";

interface ApplicationViewProps {
  dependencies: CoreDependencies;
}

export var ApplicationView = ({ dependencies }: ApplicationViewProps) => (
  <DependenciesContext.Provider value={dependencies}>
    <Router />
  </DependenciesContext.Provider>
);
