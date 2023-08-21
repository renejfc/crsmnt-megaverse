export type IApiClient = {
  readonly defaultDelayMs: () => number;
  get<T = any>(uri: SlashUri, delay: number): Promise<ApiClientResponse<T>>;
  post<T = any>(uri: SlashUri, body?: any, delay?: number): Promise<ApiClientResponse<T>>;
  delete<T = any>(uri: SlashUri, body?: any, delay?: number): Promise<ApiClientResponse<T>>;
};

export type AvailableMethods = "GET" | "POST" | "DELETE";
export type SlashUri = `/${string}`;

export type ApiClientResponse<T> = {
  status: number;
  body?: T;
};
