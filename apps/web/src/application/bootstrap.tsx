import { ErrorBoundary } from "@/application/error-boundary";
import type { ApplicationProps } from "@/application/types";
import { registerCoreDependencies } from "@/core/bootstrap";
import { errorTracker } from "@/core/services/error-tracker.service";

type RenderFunction = (children: React.ReactNode) => any | Promise<any>;

export const bootstrap =
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
