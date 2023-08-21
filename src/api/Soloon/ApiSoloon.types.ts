import { SoloonColor } from "~/model/index.ts";
import type { ApiBaseEntityParams } from "~/api/Common/index.ts";

export type ApiSoloonPutParams = ApiBaseEntityParams & {
  color: SoloonColor;
};

export type ApiSoloonDeleteParams = ApiBaseEntityParams;

export type IApiSoloon = {
  putSoloon({ row, column, color }: ApiSoloonPutParams): Promise<void>;
  deleteSoloon(params: ApiSoloonDeleteParams): Promise<void>;
};
