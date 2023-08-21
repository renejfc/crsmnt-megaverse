import { Entity } from "~/model/index.ts";
import { ApiSoloon } from "~/api/index.ts";
import type { CreateSoloonParams, DeleteSoloonParams, ISoloon } from "~/modules/Soloon/index.ts";

export class Soloon extends Entity<ApiSoloon> implements ISoloon {
  constructor() {
    super(new ApiSoloon(), "SOLOON");
  }

  async create({ row, column, color }: CreateSoloonParams) {
    await this.entityApi.putSoloon({ row, column, color });
    console.log(`SOLOON printed at row: ${row}, column: ${column} - color: ${color}`);
  }

  async delete({ row, column }: DeleteSoloonParams) {
    await this.entityApi.deleteSoloon({ row, column });
    console.log(`SOLOON deleted at row: ${row}, column: ${column}`);
  }
}
