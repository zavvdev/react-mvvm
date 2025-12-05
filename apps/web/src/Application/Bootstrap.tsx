import {
  type CoreDependencies,
  registerCore,
} from "@/infrastructure/bootstrap";

type RenderFunction = (children: React.ReactNode) => any | Promise<any>;

type Application = React.FC<{ dependencies: CoreDependencies }>;
type Error = React.FC<{ error: unknown }> | null;

export var bootstrap =
  (render: RenderFunction) =>
  (App: Application, Err: Error) =>
  (env: unknown) => {
    try {
      return render(<App dependencies={registerCore(env)} />);
    } catch (error) {
      console.error("Error during application initialization:", error);
      if (Err) {
        return render(<Err error={error} />);
      }
      throw error;
    }
  };
