import { from, mergeMap } from "rxjs";
import { anyResponse } from "../schemas";
import {
  createDto,
  deleteDto,
  getAllDto,
  getOneDto,
  totalPriceDto,
  updateDto,
} from "./schemas";
export var createExpensesApi = (http) => ({
  getAll$: (dto) =>
    from(getAllDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$("/expenses", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(getAllDto.response.parseAsync(response))),
    ),
  getOne$: (dto) =>
    from(getOneDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.get$(`/expenses/${validDto.id}`)),
      mergeMap((response) => from(getOneDto.response.parseAsync(response))),
    ),
  create$: (dto) =>
    from(createDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.post$("/expenses", validDto)),
      mergeMap((response) => from(createDto.response.parseAsync(response))),
    ),
  update$: (dto) =>
    from(updateDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.put$(`/expenses/${validDto.id}`, {
          name: validDto.name,
          description: validDto.description,
          price: validDto.price,
          isCompleted: validDto.isCompleted,
        }),
      ),
      mergeMap((response) => from(updateDto.response.parseAsync(response))),
    ),
  delete$: (dto) =>
    from(deleteDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.delete$(`/expenses/${validDto.id}`)),
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),
  getTotalPrice$: (dto) =>
    from(totalPriceDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$("/expenses/total-price", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(totalPriceDto.response.parseAsync(response))),
    ),
});
