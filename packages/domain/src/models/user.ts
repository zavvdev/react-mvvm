import { z as t } from "zod";
import { makeModel } from "../utils";

var schema = t.object({
  id: t.uuid(),
  username: t.string(),
});

export var User = makeModel(schema);
export type UserModel = t.infer<typeof User.schema>;
