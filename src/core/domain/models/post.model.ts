import { z as t } from "zod";
import { makeModel } from "@/core/domain/utilities";

const schema = t
  .object({
    id: t.number(),
    userId: t.number(),
    title: t.string(),
    body: t.string(),
  })
  .transform((post) => ({
    ...post,
    isTooLong: () => {
      return post.body.length > 300;
    },
  }));

export const Post = makeModel(schema);
export type PostModel = t.infer<typeof Post.schema>;
