import type { Http } from "@react-mvvm/http";
import { from, mergeMap } from "rxjs";
import { type GetDto, getDto, type SetDto, setDto } from "./schemas";

export var createSettingsApi = (http: Http) => ({
  get$: () =>
    from(http.get$<GetDto["Response"]>("/settings")).pipe(
      mergeMap((response) => from(getDto.response.parseAsync(response))),
    ),

  set$: (dto: SetDto["Request"]) =>
    from(setDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) =>
        http.put$<SetDto["Response"]>("/settings", validDto),
      ),
      mergeMap((response) => from(setDto.response.parseAsync(response))),
    ),
});
