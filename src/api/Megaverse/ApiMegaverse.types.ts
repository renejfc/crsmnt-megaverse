import type { MegaverseGoal } from "~/model/index.ts";

export type IApiMegaverse = {
  getMegaverseGoal(): Promise<MegaverseGoal>;
};

export type IApiMegaverseResponses = {
  getMegaverseGoal: GetMegaverseGoalResponse;
};

type GetMegaverseGoalResponse = {
  goal: Array<string[]>;
};
