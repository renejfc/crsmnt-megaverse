import type { ApiClientResponse, AvailableMethods, IApiClient, SlashUri } from "~/api/Client/index.ts";

export class ApiClient implements IApiClient {
  private readonly baseUrl: string;
  readonly defaultDelayMs = () => Math.random() * 500 + 600;

  constructor(baseUrl = Deno.env.get("API_BASE_URL") || "") {
    if (!baseUrl) {
      throw new Error("API_BASE_URL environment variable is not set");
    }

    this.baseUrl = baseUrl;
  }

  private async $fetch(method: AvailableMethods, uri: string, body?: any): Promise<Response> {
    const headers = {
      "Content-Type": "application/json",
    };

    const requestOptions: RequestInit = {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(this.baseUrl + uri, requestOptions);
    return response;
  }

  private async handleResponse<T>(method: string, uri: string, response: Response): Promise<ApiClientResponse<T>> {
    try {
      return {
        status: response.status,
        body: response.ok ? (await response.json() as T) : undefined,
      };
    } catch (error) {
      console.error(`Error while making ${method} request to ${uri}: ${error}`);
      throw new Error(`Failed to make ${method} request to ${uri}: ${error}`);
    }
  }

  private async addDelayIfNeeded(delayMs?: number): Promise<void> {
    if (delayMs) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  async get<T = any>(uri: SlashUri, delay?: number): Promise<ApiClientResponse<T>> {
    await this.addDelayIfNeeded(delay);
    const response = await this.$fetch("GET", uri);
    return this.handleResponse("GET", uri, response);
  }

  async post<T = any>(uri: SlashUri, body?: any, delay?: number): Promise<ApiClientResponse<T>> {
    await this.addDelayIfNeeded(delay);
    const response = await this.$fetch("POST", uri, body);
    return this.handleResponse("POST", uri, response);
  }

  async delete<T = any>(uri: SlashUri, body?: any, delay?: number): Promise<ApiClientResponse<T>> {
    await this.addDelayIfNeeded(delay);
    const response = await this.$fetch("DELETE", uri, body);
    return this.handleResponse("DELETE", uri, response);
  }
}
