import type { DefaultEntityParams, SoloonColor } from "~/model/index.ts";

export type DeleteSoloonParams = DefaultEntityParams;
export type CreateSoloonParams = DefaultEntityParams & {
  color: SoloonColor;
};

export type ISoloon = {
  create(params: CreateSoloonParams): Promise<void>;
  delete(param: DeleteSoloonParams): Promise<void>;
};
