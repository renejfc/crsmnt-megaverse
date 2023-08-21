import type { DefaultEntityParams } from "~/model/index.ts";

export type CreatePolyanetParams = DefaultEntityParams;
export type DeletePolyanetParams = DefaultEntityParams;

export type IPolyanet = {
  create(params: CreatePolyanetParams): Promise<void>;
  delete(param: DeletePolyanetParams): Promise<void>;
};
