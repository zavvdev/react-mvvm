import { z as t } from "zod";
import { Post } from "@/core/domain/models/post.model";

// Get all DTO

export const getAllDto = {
  response: t.array(Post.schema),
};

export type GetAllDto = {
  Response: t.infer<typeof getAllDto.response>;
};

// Get one DTO

export const getOneDto = {
  request: t.object({
    id: t.string(),
  }),
  response: Post.schema,
};

export type GetOneDto = {
  Request: t.infer<typeof getOneDto.request>;
  Response: t.infer<typeof getOneDto.response>;
};
