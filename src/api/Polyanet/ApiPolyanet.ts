import { ApiClient } from "~/api/Client/index.ts";
import type { ApiPolyanetDeleteParams, ApiPolyanetPutParams, IApiPolyanet } from "~/api/Polyanet/index.ts";

export class ApiPolyanet implements IApiPolyanet {
  private readonly apiClient: ApiClient;
  private readonly candidateId: string = Deno.env.get("API_CANDIDATE_ID") || "";

  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  async putPolyanet({ row, column }: ApiPolyanetPutParams) {
    const { status } = await this.apiClient.post(`/polyanets`, {
      row,
      column,
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error putting Polyanet at ${row}, ${column}. Status: ${status}`);
    }
  }

  async deletePolyanet({ row, column }: ApiPolyanetDeleteParams) {
    const { status } = await this.apiClient.delete(`/polyanets`, {
      row,
      column,
      candidateId: this.candidateId,
    }, this.apiClient.defaultDelayMs());

    if (status !== 200) {
      throw new Error(`Error deleting Polyanet at ${row}, ${column}. Status: ${status}`);
    }
  }
}
