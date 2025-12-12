import type { DiContainer } from "@/application/di/di.types";
import { createDependencyInjectionContext } from "@/application/di/di.factory";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<DiContainer>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
