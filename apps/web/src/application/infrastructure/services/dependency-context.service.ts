import {
  createDependencyContext,
  createWithInstance,
} from "@react-mvvm/dependency-context";
import type { CoreDependencies } from "@/application/types";

export const { DependenciesContext, inject } =
  createDependencyContext<CoreDependencies>();

export const withVM = createWithInstance("useViewModel");
