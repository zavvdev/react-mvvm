import type { SharedDependencies } from "@/_shared/application/di/di.types";
import { createDependencyInjectionContext } from "@/_shared/application/di/di.factory";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<SharedDependencies>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
