import "@react-mvvm/uikit-web/styles.css";
import { Router } from "@/application/router";
import { DependenciesContext } from "@/core/dependency-context";
import type { CoreDependencies } from "@/core/types";

interface Props {
  dependencies: CoreDependencies;
}

export var ApplicationView = ({ dependencies }: Props) => (
  <DependenciesContext.Provider value={dependencies}>
    <Router />
  </DependenciesContext.Provider>
);
