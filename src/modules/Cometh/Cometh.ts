import { Entity } from "~/model/index.ts";
import { ApiCometh } from "~/api/Cometh/index.ts";
import type { CreateComethParams, DeleteComethParams, ICometh } from "~/modules/Cometh/index.ts";

export class Cometh extends Entity<ApiCometh> implements ICometh {
  constructor() {
    super(new ApiCometh(), "COMETH");
  }

  async create({ row, column, direction }: CreateComethParams) {
    await this.entityApi.putCometh({ row, column, direction });
    console.log(`COMETH printed at row: ${row}, column: ${column} - facing: ${direction}`);
  }

  async delete({ row, column }: DeleteComethParams) {
    await this.entityApi.deleteCometh({ row, column });
    console.log(`COMETH deleted at row: ${row}, column: ${column}`);
  }
}
