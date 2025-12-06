import { from, mergeMap } from "rxjs";
import type { Http } from "../../http";
import { type AnyResponse, anyResponse } from "../schemas";
import {
  type AvailableBudgetDto,
  availableBudgetDto,
  type CreateDto,
  createDto,
  type DeleteDto,
  deleteDto,
  type GetAllDto,
  type GetOneDto,
  getAllDto,
  getOneDto,
  type UpdateDto,
  updateDto,
} from "./schemas";

export var createCategoriesApi = (http: Http) => ({
  getAll$: (dto?: GetAllDto["Request"]) =>
    from(getAllDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<GetAllDto["Response"]>("/categories", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(getAllDto.response.parseAsync(response))),
    ),

  getOne$: (dto: GetOneDto["Request"]) =>
    from(getOneDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<GetOneDto["Response"]>(`/categories/${validDto.id}`),
      ),
      mergeMap((response) => from(getOneDto.response.parseAsync(response))),
    ),

  create$: (dto: CreateDto["Request"]) =>
    from(createDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.post$<CreateDto["Response"]>("/categories", validDto),
      ),
      mergeMap((response) => from(createDto.response.parseAsync(response))),
    ),

  update$: (dto: UpdateDto["Request"]) =>
    from(updateDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.put$<UpdateDto["Response"]>(`/categories/${validDto.id}`, {
          name: validDto.name,
          budgetLimit: validDto.budgetLimit,
          allowOverBudget: validDto.allowOverBudget,
        }),
      ),
      mergeMap((response) => from(updateDto.response.parseAsync(response))),
    ),

  delete$: (dto: DeleteDto["Request"]) =>
    from(deleteDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.delete$<AnyResponse>(`/categories/${validDto.id}`),
      ),
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),

  getAvailableBudget$: (dto: AvailableBudgetDto["Request"]) =>
    from(availableBudgetDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<AvailableBudgetDto["Response"]>(
          `/categories/${validDto.id}/available-budget`,
        ),
      ),
      mergeMap((response) =>
        from(availableBudgetDto.response.parseAsync(response)),
      ),
    ),
});
