import { ApiClient } from "~/api/Client/index.ts";
import type { ApiComethDeleteParams, ApiComethPutParams, IApiCometh } from "~/api/Cometh/index.ts";

export class ApiCometh implements IApiCometh {
  private readonly apiClient: ApiClient;
  private readonly candidateId = Deno.env.get("API_CANDIDATE_ID") || "";

  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  async putCometh({ row, column, direction }: ApiComethPutParams) {
    const { status } = await this.apiClient.post(`/comeths`, {
      row,
      column,
      direction: direction.toLowerCase(),
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error putting Cometh at ${row}, ${column}. Status: ${status}`);
    }
  }

  async deleteCometh({ row, column }: ApiComethDeleteParams) {
    const { status } = await this.apiClient.delete(`/comeths`, {
      row,
      column,
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error deleting Cometh at ${row}, ${column}. Status: ${status}`);
    }
  }
}
