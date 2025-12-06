import { User } from "@react-mvvm/domain";
import type { z as t } from "zod";
import { response } from "../schemas";

// Get profile DTO

export var getProfileDto = {
  response: response(User.schema),
};

export type GetProfileDto = {
  Response: t.infer<typeof getProfileDto.response>;
};
