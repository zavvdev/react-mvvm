import { errorTracker } from "@/application/services/error-tracker.service";
import { ErrorBoundaryView } from "@/application/ui/views/error-boundary.view";

type RenderFunction = (children: React.ReactNode) => any | Promise<any>;

export const bootstrap =
  (render: RenderFunction) =>
  (renderApplicationView: () => React.ReactNode) => {
    try {
      return render(
        <ErrorBoundaryView>{renderApplicationView()}</ErrorBoundaryView>,
      );
    } catch (error) {
      errorTracker.report({
        location: "bootstrap",
        error,
      });

      throw error;
    }
  };
