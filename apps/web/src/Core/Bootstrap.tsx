import { injectable } from "@/di";
import "@/Core/Styles/Main.css";
import { createConfig } from "@/Core/Config";
import { envSchema } from "@/Core/Types/Env";

export var bootstrap =
  (render: (children: React.ReactNode) => any | Promise<any>) =>
    (App: React.FC, Error: React.FC<{ error: unknown }> | null) =>
      (env_: unknown) => {
        try {
          var env = createConfig(envSchema.parse(env_));

          injectable("Config", () => env, {
            singleton: true,
          });

          return render(<App />);
        } catch (error) {
          console.error("Error during application initialization:", error);
          if (Error) {
            return render(<Error error={error} />);
          }
          throw error;
        }
      };
