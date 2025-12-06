import { from, mergeMap } from "rxjs";
import { getDto, setDto } from "./schemas";
export var createSettingsApi = (http) => ({
  get$: () =>
    from(http.get$("/settings")).pipe(
      mergeMap((response) => from(getDto.response.parseAsync(response))),
    ),
  set$: (dto) =>
    from(setDto.request.parseAsync(dto)).pipe(
      mergeMap((validDto) => http.put$("/settings", validDto)),
      mergeMap((response) => from(setDto.response.parseAsync(response))),
    ),
});
