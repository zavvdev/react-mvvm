import type { Http } from "../../http";
import {
  type GetAllDto,
  type GetOneDto,
  getAllDto,
  getOneDto,
} from "./schemas";

export const createPostsApi = (http: Http) => ({
  getAll: async () => {
    const res = await http.get<GetAllDto["Response"]>("/posts");
    return await getAllDto.response.parseAsync(res);
  },

  getOne: async (dto: GetOneDto["Request"]) => {
    const req = await getOneDto.request.parseAsync(dto);
    const res = await http.get(`/posts/${req.id}`);
    return await getOneDto.response.parseAsync(res);
  },
});
