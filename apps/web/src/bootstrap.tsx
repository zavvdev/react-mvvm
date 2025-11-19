import { type Api, createApi } from "@react-mvvm/api";
import { AuthService } from "@react-mvvm/auth-service";
import { asFunction, asValue, injectable } from "@react-mvvm/di-container";
import { createHttp } from "@react-mvvm/http";
import {
  createAuthRequestInterceptor,
  createAuthResponseErrorInterceptor,
  createAuthTokenStorage,
} from "@/Core/Auth";
import { createConfig } from "@/Core/Config";
import { envSchema } from "@/Core/Types";
import { authViewModel } from "@/Modules/Auth/ViewModel";

var register = (env: unknown) => {
  var config = createConfig(envSchema.parse(env));
  var tokenStorage = createAuthTokenStorage(config);

  var http = createHttp({
    baseUrl: config.apiUrl,
    onRequest: createAuthRequestInterceptor(tokenStorage),
    onResponseError: createAuthResponseErrorInterceptor(config),
  });

  var api = createApi(http);

  injectable({
    config: asValue(config),
    api: asValue(api),
    authService: asFunction(
      ({ api }: { api: Api }) => new AuthService({ api, tokenStorage }),
    ).singleton(),
    authViewModel: asValue(authViewModel),
  });
};

export var bootstrap =
  (render: (children: React.ReactNode) => any | Promise<any>) =>
  (App: React.FC, Err: React.FC<{ error: unknown }> | null) =>
  (env: unknown) => {
    try {
      register(env);
      return render(<App />);
    } catch (error) {
      console.error("Error during application initialization:", error);
      if (Err) {
        return render(<Err error={error} />);
      }
      throw error;
    }
  };
