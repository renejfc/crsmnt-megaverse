import type { ApiBaseEntityParams } from "~/api/Common/index.ts";

export type ApiPolyanetPutParams = ApiBaseEntityParams;
export type ApiPolyanetDeleteParams = ApiBaseEntityParams;

export type IApiPolyanet = {
  putPolyanet(Params: ApiPolyanetPutParams): Promise<void>;
  deletePolyanet(Params: ApiPolyanetDeleteParams): Promise<void>;
};
