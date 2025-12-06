import {
  createDependencyContext,
  createWithInstance,
} from "@react-mvvm/dependency-context";
import type { CoreDependencies } from "./types";

export var { DependenciesContext, inject, withInjections } =
  createDependencyContext<CoreDependencies>();

export var withVM = createWithInstance("useViewModel");
