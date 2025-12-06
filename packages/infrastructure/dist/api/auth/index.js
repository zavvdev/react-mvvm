import { from, mergeMap } from "rxjs";
import { anyResponse } from "../schemas";
import { loginDto, registerDto } from "./schemas";
export var createAuthApi = (http) => ({
  register$: (dto) =>
    from(registerDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.post$("/auth/register", validDto)),
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),
  login$: (dto) =>
    from(loginDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.post$("/auth/login", validDto)),
      mergeMap((response) => from(loginDto.response.parseAsync(response))),
    ),
  logout$: () =>
    http
      .delete$("/auth/logout")
      .pipe(mergeMap((response) => from(anyResponse.parseAsync(response)))),
});
