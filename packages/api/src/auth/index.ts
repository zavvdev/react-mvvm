import type { Http } from "@react-mvvm/http";
import { from, mergeMap } from "rxjs";
import { type AnyResponse, anyResponse } from "../schemas";
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
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),

  login$: (dto: LoginDto["Request"]) =>
    from(loginDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.post$<LoginDto["Response"]>("/auth/login", validDto),
      ),
      mergeMap((response) => from(loginDto.response.parseAsync(response))),
    ),

  logout$: () =>
    http
      .delete$<AnyResponse>("/auth/logout")
      .pipe(mergeMap((response) => from(anyResponse.parseAsync(response)))),
});
