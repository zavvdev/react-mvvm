import { Post } from "@react-mvvm/domain";
import { z as t } from "zod";

// Get all DTO

export const getAllDto = {
  response: t.array(Post.schema),
};

export type GetAllDto = {
  Response: t.infer<typeof getAllDto.response>;
};

// Delete DTO

export const deleteDto = {
  request: t.object({
    id: t.string(),
  }),
};

export type DeleteDto = {
  Request: t.infer<typeof deleteDto.request>;
};
