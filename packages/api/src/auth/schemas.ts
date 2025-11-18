import { z as t } from "zod";
import { response } from "../schemas";

// Register DTO

export var registerDto = {
  request: t.object({
    username: t.string(),
    password: t.string(),
  }),
};

export type RegisterDto = {
  Request: t.infer<typeof registerDto.request>;
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

export type LoginDto = {
  Request: t.infer<typeof loginDto.request>;
  Response: t.infer<typeof loginDto.response>;
};
