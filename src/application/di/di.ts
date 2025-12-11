import type { DiDependencies } from "@/application/di/di.types";
import { createDependencyInjectionContext } from "@/application/di/di.factory";

const { DependenciesContext, inject, withInjections, createWithInstance } =
  createDependencyInjectionContext<DiDependencies>();

export const DI = {
  Provider: DependenciesContext.Provider,
  withVM: createWithInstance("useViewModel"),
  withInjections,
  inject,
};
