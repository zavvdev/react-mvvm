import { from, mergeMap } from "rxjs";
import type { Http } from "../../http";
import {
  type DeleteDto,
  deleteDto,
  type GetAllDto,
  getAllDto,
} from "./schemas";

export const createPostsApi = (http: Http) => ({
  getAll$: () =>
    from(http.get$<GetAllDto["Response"]>("/posts")).pipe(
      mergeMap((response) => from(getAllDto.response.parseAsync(response))),
    ),

  delete$: (dto: DeleteDto["Request"]) =>
    from(deleteDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.delete$(`/posts/${validDto.id}`)),
    ),
});
