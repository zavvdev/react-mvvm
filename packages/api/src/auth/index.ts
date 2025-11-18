import type { Http } from "@react-mvvm/http";
import type { AnyResponse } from "../schemas";
import {
  type LoginDto,
  loginDto,
  type RegisterDto,
  registerDto,
} from "./schemas";

export var createAuthApi = (http: Http) => ({
  register: (dto: RegisterDto["Request"]) =>
    registerDto.request
      .parseAsync(dto)
      .then((validDto) => http.post<AnyResponse>("/auth/register", validDto)),

  login: (dto: LoginDto["Request"]) =>
    loginDto.request
      .parseAsync(dto)
      .then((validDto) =>
        http.post<LoginDto["Response"]>("/auth/login", validDto),
      )
      .then((response) => loginDto.response.parseAsync(response.data)),

  logout: () => http.delete<AnyResponse>("/auth/logout"),
});
