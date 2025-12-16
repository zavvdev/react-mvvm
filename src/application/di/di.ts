import { createDependencyInjectionContext } from "@/application/di/di.factory";
import type { DiContainer } from "@/application/di/di.types";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<DiContainer>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
