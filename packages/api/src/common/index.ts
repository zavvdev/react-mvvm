import type { Http } from "@react-mvvm/http";
import { from, mergeMap } from "rxjs";
import { type AnyResponse, anyResponse } from "../schemas";
import { type GetProfileDto, getProfileDto } from "./schemas";

export var createCommonApi = (http: Http) => ({
  getProfile$: () =>
    from(http.get$<GetProfileDto["Response"]>("/me")).pipe(
      mergeMap((response) => from(getProfileDto.response.parseAsync(response))),
    ),

  deleteProfile$: () =>
    from(http.delete$<AnyResponse>("/me")).pipe(
      mergeMap((response) => from(anyResponse.parseAsync(response))),
    ),
});
