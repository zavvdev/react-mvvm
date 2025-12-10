import type { SharedDiDependencies } from "@/_shared/application/di/di.types";
import { createDependencyInjectionContext } from "@/_shared/application/di/di.factory";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<SharedDiDependencies>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
