import { ApiClient } from "~/api/Client/index.ts";
import type { IApiMegaverse, IApiMegaverseResponses } from "~/api/Megaverse/index.ts";

export class ApiMegaverse implements IApiMegaverse {
  private readonly apiClient: ApiClient;
  private readonly candidateId = Deno.env.get("API_CANDIDATE_ID") || "";

  constructor(apiClient = new ApiClient()) {
    this.apiClient = apiClient;
  }

  async getMegaverseGoal() {
    const { body, status } = await this.apiClient.get<IApiMegaverseResponses["getMegaverseGoal"]>(
      `/map/${this.candidateId}/goal`,
    );

    if (!body) {
      throw new Error(`No body in response: ${status}, ${console.trace()}`);
    }

    const { goal } = body;

    return goal;
  }
}
