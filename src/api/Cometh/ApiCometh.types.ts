import { ComethDirection } from "~/model/index.ts";
import type { ApiBaseEntityParams } from "~/api/Common/Common.types.ts";

export type ApiComethPutParams = ApiBaseEntityParams & {
  direction: ComethDirection;
};

export type ApiComethDeleteParams = ApiBaseEntityParams;

export type IApiCometh = {
  putCometh(params: ApiComethPutParams): Promise<void>;
  deleteCometh(params: ApiComethDeleteParams): Promise<void>;
};
