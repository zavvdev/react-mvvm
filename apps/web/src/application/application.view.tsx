import "@react-mvvm/uikit-web/styles.css";
import type { PropsWithChildren } from "react";
import { Router } from "@/application/router";
import type { ApplicationProps } from "@/application/types";
import { DependenciesContext } from "@/core/services/dependency-context.service";

// If you need to add more providers, you can do it here.
// Also, you can use this wrapper in your tests to provide mock dependencies
// if it's easier for you that providing each dependency separately.
const ApplicationWrapper = ({
  dependencies,
  children,
}: ApplicationProps & PropsWithChildren) => (
  <DependenciesContext.Provider value={dependencies}>
    {children}
  </DependenciesContext.Provider>
);

export const Application = ({ dependencies }: ApplicationProps) => (
  <ApplicationWrapper dependencies={dependencies}>
    <Router />
  </ApplicationWrapper>
);
