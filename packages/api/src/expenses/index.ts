import type { Http } from "@react-mvvm/http";
import { from, mergeMap } from "rxjs";
import { type AnyResponse, anyResponse } from "../schemas";
import {
  type CreateDto,
  createDto,
  type DeleteDto,
  deleteDto,
  type GetAllDto,
  type GetOneDto,
  getAllDto,
  getOneDto,
  type TotalPriceDto,
  totalPriceDto,
  type UpdateDto,
  updateDto,
} from "./schemas";

export var createExpensesApi = (http: Http) => ({
  getAll$: (dto: GetAllDto["Request"]) =>
    from(getAllDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<GetAllDto["Response"]>("/expenses", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(getAllDto.response.parseAsync(response))),
    ),

  getOne$: (dto: GetOneDto["Request"]) =>
    from(getOneDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<GetOneDto["Response"]>(`/expenses/${validDto.id}`),
      ),
      mergeMap((response) => from(getOneDto.response.parseAsync(response))),
    ),

  create$: (dto: CreateDto["Request"]) =>
    from(createDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.post$<CreateDto["Response"]>("/expenses", validDto),
      ),
      mergeMap((response) => from(createDto.response.parseAsync(response))),
    ),

  update$: (dto: UpdateDto["Request"]) =>
    from(updateDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.put$<UpdateDto["Response"]>(`/expenses/${validDto.id}`, {
          name: validDto.name,
          description: validDto.description,
          price: validDto.price,
          isCompleted: validDto.isCompleted,
        }),
      ),
      mergeMap((response) => from(updateDto.response.parseAsync(response))),
    ),

  delete$: (dto: DeleteDto["Request"]) =>
    from(deleteDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.delete$<AnyResponse>(`/expenses/${validDto.id}`),
      ),
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),

  getTotalPrice$: (dto: TotalPriceDto["Request"]) =>
    from(totalPriceDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.get$<TotalPriceDto["Response"]>("/expenses/total-price", {
          params: validDto,
        }),
      ),
      mergeMap((response) => from(totalPriceDto.response.parseAsync(response))),
    ),
});
