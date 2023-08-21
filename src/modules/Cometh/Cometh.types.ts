import type { ComethDirection, DefaultEntityParams } from "~/model/index.ts";

export type DeleteComethParams = DefaultEntityParams;
export type CreateComethParams = DefaultEntityParams & {
  direction: ComethDirection;
};

export type ICometh = {
  create(params: CreateComethParams): Promise<void>;
  delete(param: DeleteComethParams): Promise<void>;
};
