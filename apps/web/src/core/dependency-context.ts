import {
  createDependencyContext,
  // createWithInstance,
} from "@react-mvvm/dependency-context";
import type { CoreDependencies } from "./types";

export var { DependenciesContext } =
  createDependencyContext<CoreDependencies>();

// export var withVM = createWithInstance("useViewModel");
