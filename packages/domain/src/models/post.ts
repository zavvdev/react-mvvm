import { z as t } from "zod";
import { makeModel } from "../utils";

var schema = t
  .object({
    id: t.string(),
    userId: t.string(),
    title: t.string(),
    body: t.string(),
  })
  .transform((post) => ({
    ...post,
    isTooLong: () => {
      return post.body.length > 300;
    },
  }));

export var Post = makeModel(schema);
export type PostModel = t.infer<typeof Post.schema>;
