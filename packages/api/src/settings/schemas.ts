import { Settings } from "@react-mvvm/domain";
import type { z as t } from "zod";
import { response } from "../schemas";

// Get DTO

export var getDto = {
  response: response(Settings.schema),
};

export type GetDto = {
  Response: t.infer<typeof getDto.response>;
};

// Set DTO

export var setDto = {
  request: Settings.schema,
  response: response(Settings.schema),
};

export type SetDto = {
  Request: t.infer<typeof setDto.request>;
  Response: t.infer<typeof setDto.response>;
};
