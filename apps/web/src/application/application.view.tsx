import "@react-mvvm/uikit-web/styles.css";
import type { PropsWithChildren } from "react";
import { Router } from "@/application/router";
import { DependenciesContext } from "@/core/dependency-context";
import type { CoreDependencies } from "@/core/types";

interface ApplicationProps {
  dependencies: CoreDependencies;
}

// If you need to add more providers, you can do it here.
// Also, you can use this wrapper in your tests to provide mock dependencies
// if it's easier for you that providing each dependency separately.
var ApplicationWrapper = ({
  dependencies,
  children,
}: ApplicationProps & PropsWithChildren) => (
  <DependenciesContext.Provider value={dependencies}>
    {children}
  </DependenciesContext.Provider>
);

export var ApplicationView = ({ dependencies }: ApplicationProps) => (
  <ApplicationWrapper dependencies={dependencies}>
    <Router />
  </ApplicationWrapper>
);
