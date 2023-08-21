import { ApiCometh, ApiPolyanet, ApiSoloon } from "~/api/index.ts";

export type MegaverseGoal = Array<string[]>;
export type EntityNames = "POLYANET" | "COMETH" | "SOLOON";
export type EntityApiList = ApiPolyanet | ApiCometh | ApiSoloon;
export type ComethDirection = "UP" | "DOWN" | "LEFT" | "RIGHT";
export type SoloonColor = "RED" | "BLUE" | "PURPLE" | "WHITE";
export type DefaultEntityParams = {
  row: number;
  column: number;
};

export abstract class Entity<EntityApi> {
  protected entityApi: EntityApi;
  readonly entityName: EntityNames;

  constructor(entityApi: EntityApi, entityName: EntityNames) {
    this.entityApi = entityApi;
    this.entityName = entityName;
  }

  abstract create(...args: any[]): Promise<void>;
  abstract delete(...args: any[]): Promise<void>;
}
