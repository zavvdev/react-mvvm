import { from, mergeMap } from "rxjs";
import { anyResponse } from "../schemas";
import {
  availableBudgetDto,
  createDto,
  deleteDto,
  getAllDto,
  getOneDto,
  updateDto,
} from "./schemas";
export var createCategoriesApi = (http) => ({
  getAll$: (dto) =>
    from(getAllDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$("/categories", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(getAllDto.response.parseAsync(response))),
    ),
  getOne$: (dto) =>
    from(getOneDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.get$(`/categories/${validDto.id}`)),
      mergeMap((response) => from(getOneDto.response.parseAsync(response))),
    ),
  create$: (dto) =>
    from(createDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.post$("/categories", validDto)),
      mergeMap((response) => from(createDto.response.parseAsync(response))),
    ),
  update$: (dto) =>
    from(updateDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.put$(`/categories/${validDto.id}`, {
          name: validDto.name,
          budgetLimit: validDto.budgetLimit,
          allowOverBudget: validDto.allowOverBudget,
        }),
      ),
      mergeMap((response) => from(updateDto.response.parseAsync(response))),
    ),
  delete$: (dto) =>
    from(deleteDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.delete$(`/categories/${validDto.id}`)),
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),
  getAvailableBudget$: (dto) =>
    from(availableBudgetDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$(`/categories/${validDto.id}/available-budget`),
      ),
      mergeMap((response) =>
        from(availableBudgetDto.response.parseAsync(response)),
      ),
    ),
});
