import {
  createDependencyContext,
  createWithInstance,
} from "@react-mvvm/dependency-context";
import type { CoreDependencies } from "@/Core/Bootstrap";

export var { DependenciesContext, inject, withInjections } =
  createDependencyContext<CoreDependencies>();

export var withVM = createWithInstance("viewModel");
