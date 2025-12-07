import "@react-mvvm/uikit-web/styles.css";
import type { PropsWithChildren } from "react";
import { DependenciesContext } from "@/application/infrastructure/services/dependency-context.service";
import type { CoreDependencies } from "@/application/types";
import type { ApplicationViewModel } from "@/application/ui/view-models/application.vm";
import { Router } from "@/router";

export type ApplicationViewProps = {
  env: unknown;
  useViewModel: ApplicationViewModel;
};

type ApplicationWrapperProps = CoreDependencies & PropsWithChildren & {};

// If you need to add more providers, you can do it here.
// Also, you can use this wrapper in your tests to provide mock dependencies
// if it's easier for you that providing each dependency separately.
const ApplicationWrapper = ({ children, ...rest }: ApplicationWrapperProps) => (
  <DependenciesContext.Provider value={rest}>
    {children}
  </DependenciesContext.Provider>
);

export const ApplicationView = ({
  useViewModel,
  env,
}: ApplicationViewProps) => (
  <ApplicationWrapper {...useViewModel(env)}>
    <Router />
  </ApplicationWrapper>
);
