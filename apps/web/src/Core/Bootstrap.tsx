import { injectable } from "@/di";
import "@/Core/Styles/Main.css";
import { createConfig } from "@/Core/Config";
import { createHttp } from "@/Core/Http";
import { envSchema } from "@/Core/Types/Env";

export var bootstrap =
  (render: (children: React.ReactNode) => any | Promise<any>) =>
  (App: React.FC, Err: React.FC<{ error: unknown }> | null) =>
  (env: unknown) => {
    try {
      var config = createConfig(envSchema.parse(env));
      var http = createHttp(config.apiUrl);

      injectable("Config", () => config, {
        singleton: true,
      });

      injectable("Http", () => http, {
        singleton: true,
      });

      return render(<App />);
    } catch (error) {
      console.error("Error during application initialization:", error);
      if (Err) {
        return render(<Err error={error} />);
      }
      throw error;
    }
  };
