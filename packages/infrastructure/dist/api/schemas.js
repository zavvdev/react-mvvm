import { z as t } from "zod";
export var response = (data) =>
  t.object({
    status: t.enum(["success", "error"]),
    message: t.string(),
    data,
  });
export var anyResponse = response(t.unknown());
