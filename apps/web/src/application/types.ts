import type { CoreDependencies } from "@/core/types";

export type ApplicationProps = {
  useDependencies: () => CoreDependencies;
};
