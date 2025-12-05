import { z as t } from "zod";
import { makeModel } from "../utils";

var schema = t.object({
  currency: t.string().length(3),
  updatedAt: t.string(),
});

export var Settings = makeModel(schema);
export type SettingsModel = t.infer<typeof Settings.schema>;
