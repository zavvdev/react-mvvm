import type { PropsWithChildren } from "react";
import "@/ui/styles/main.css";
import "@/ui/services/i18n/i18n.service";
import { Router } from "@/_router/router";
import type { DiDependencies } from "@/application/di/di.types";
import { DI } from "@/application/di/di";
import { registerDI } from "@/application/di/di.registry";

interface ApplicationWrapperProps extends PropsWithChildren {
  diDependencies: DiDependencies;
}

// If you need to add more providers, you can do it here.
// Also, you can use this wrapper in your tests to provide mock dependencies
// if it's easier for you that providing each dependency separately.
const ApplicationWrapper = ({
  diDependencies,
  children,
}: ApplicationWrapperProps) => (
  <DI.Provider value={diDependencies}>{children}</DI.Provider>
);

export const ApplicationView = () => (
  <ApplicationWrapper diDependencies={registerDI()}>
    <Router />
  </ApplicationWrapper>
);
