import { registerCoreDependencies } from "@/core/bootstrap";
import { errorTracker } from "@/core/error-tracker";
import { ErrorBoundary } from "./error-boundary";
import type { ApplicationProps } from "./types";

type RenderFunction = (children: React.ReactNode) => any | Promise<any>;

export var bootstrap =
  (render: RenderFunction) =>
  (
    App: React.FC<ApplicationProps>,
    Crash: React.FC<{ error: unknown }> | null,
  ) =>
  (env: unknown) => {
    try {
      return render(
        <ErrorBoundary>
          <App dependencies={registerCoreDependencies(env)} />
        </ErrorBoundary>,
      );
    } catch (error) {
      errorTracker.report({
        location: "bootstrap",
        error,
      });

      if (Crash) {
        return render(<Crash error={error} />);
      }

      throw error;
    }
  };
