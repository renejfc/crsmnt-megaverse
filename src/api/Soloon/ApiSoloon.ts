import { ApiClient } from "~/api/Client/index.ts";
import type { ApiSoloonDeleteParams, ApiSoloonPutParams, IApiSoloon } from "~/api/Soloon/index.ts";

export class ApiSoloon implements IApiSoloon {
  private readonly apiClient: ApiClient;
  private readonly candidateId = Deno.env.get("API_CANDIDATE_ID") || "";

  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  async putSoloon({ row, column, color }: ApiSoloonPutParams) {
    const { status } = await this.apiClient.post(`/soloons`, {
      row,
      column,
      color: color.toLowerCase(),
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error putting Soloon at ${row}, ${column}. Status: ${status}`);
    }
  }

  async deleteSoloon({ row, column }: ApiSoloonDeleteParams) {
    const { status } = await this.apiClient.delete(`/soloons`, {
      row,
      column,
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error deleting Soloon at ${row}, ${column}. Status: ${status}`);
    }
  }
}
