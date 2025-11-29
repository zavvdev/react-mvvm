import type { Http } from "@react-mvvm/http";
import { from, mergeMap } from "rxjs";
import type { AnyResponse } from "../schemas";
import {
  type LoginDto,
  loginDto,
  type RegisterDto,
  registerDto,
} from "./schemas";

export var createAuthApi = (http: Http) => ({
  register$: (dto: RegisterDto["Request"]) =>
    from(registerDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.post$<AnyResponse>("/auth/register", validDto),
      ),
    ),

  login$: (dto: LoginDto["Request"]) =>
    from(loginDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.post$<LoginDto["Response"]>("/auth/login", validDto),
      ),
      mergeMap((response) => from(loginDto.response.parseAsync(response))),
    ),

  logout$: () => http.delete$<AnyResponse>("/auth/logout"),
});
