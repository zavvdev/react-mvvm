import type { CoreDependencies } from "@/core/application/di/di.types";
import { createDependencyInjectionContext } from "@/core/application/di/di.factory";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<CoreDependencies>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
