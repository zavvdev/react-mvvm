import { z as t } from "zod";
import { response } from "../schemas";
// Register DTO
export var registerDto = {
  request: t.object({
    username: t.string(),
    password: t.string(),
  }),
};
// Login DTO
export var loginDto = {
  request: t.object({
    username: t.string(),
    password: t.string(),
  }),
  response: response(
    t.object({
      token: t.string(),
    }),
  ),
};
