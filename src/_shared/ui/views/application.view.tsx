import type { PropsWithChildren } from "react";
import "@/_shared/ui/styles/main.css";
import "@/_shared/ui/services/i18n/i18n.service";
import { Router } from "@/__router/router";
import type { SharedDiDependencies } from "@/_shared/application/di/di.types";
import { DI } from "@/_shared/application/di/di";
import {
  querySignalClient,
  QuerySignalProvider,
  type QuerySignalClient,
} from "@/_shared/application/services/query-signal/query-signal.service";
import { registerSharedDI } from "@/_shared/application/di/di.registry";

interface ApplicationWrapperProps extends PropsWithChildren {
  diDependencies: SharedDiDependencies;
  querySignalClient: QuerySignalClient;
}

// If you need to add more providers, you can do it here.
// Also, you can use this wrapper in your tests to provide mock dependencies
// if it's easier for you that providing each dependency separately.
const ApplicationWrapper = ({
  diDependencies,
  querySignalClient,
  children,
}: ApplicationWrapperProps) => (
  <DI.Provider value={diDependencies}>
    <QuerySignalProvider client={querySignalClient}>
      {children}
    </QuerySignalProvider>
  </DI.Provider>
);

export const ApplicationView = () => (
  <ApplicationWrapper
    diDependencies={registerSharedDI()}
    querySignalClient={querySignalClient}
  >
    <Router />
  </ApplicationWrapper>
);
