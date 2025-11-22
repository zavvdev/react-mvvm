import { registerApplication } from "@/Application/Registration";
import { registerCore } from "@/Core/Registration";

type RenderFunction = (children: React.ReactNode) => any | Promise<any>;

type Renderable = React.FC;
type Error = React.FC<{ error: unknown }> | null;

export var bootstrap =
  (render: RenderFunction) =>
  (Application: Renderable, Err: Error) =>
  (env: unknown) => {
    try {
      registerCore(env);
      registerApplication();
      return render(<Application />);
    } catch (error) {
      console.error("Error during application initialization:", error);
      if (Err) {
        return render(<Err error={error} />);
      }
      throw error;
    }
  };
