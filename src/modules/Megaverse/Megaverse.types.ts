import { Entity, type EntityApiList } from "~/model/index.ts";

export type IMegaverse = {
  printAllOfEntity: (entity: Entity<EntityApiList>) => Promise<void>;
};
