import { createHttp as makeHttp } from "@react-mvvm/http";

export type ApiResponse<T = unknown> = {
  status: "success" | "error";
  message: string;
  data: T;
};

export var createHttp = (baseUrl: string) => makeHttp<ApiResponse>({ baseUrl });
