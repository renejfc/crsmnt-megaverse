import { ApiPolyanet } from "~/api/index.ts";
import { Entity } from "~/model/index.ts";
import type { CreatePolyanetParams, DeletePolyanetParams, IPolyanet } from "~/modules/Polyanet/index.ts";

export class Polyanet extends Entity<ApiPolyanet> implements IPolyanet {
  constructor() {
    super(new ApiPolyanet(), "POLYANET");
  }

  async create({ row, column }: CreatePolyanetParams) {
    await this.entityApi.putPolyanet({ row, column });
    console.log(`POLYANET printed at row: ${row}, column: ${column}`);
  }

  async delete({ row, column }: DeletePolyanetParams) {
    await this.entityApi.deletePolyanet({ row, column });
    console.log(`POLYANET deleted at row: ${row}, column: ${column}`);
  }
}
