import {
  createDependencyContext,
  createWithInstance,
} from "@react-mvvm/dependency-context";
import type { CoreDependencies } from "@/core/bootstrap";

export var { DependenciesContext, inject, withInjections } =
  createDependencyContext<CoreDependencies>();

export var withVM = createWithInstance("viewModel");
