import { ApiMegaverse } from "~/api/Megaverse/index.ts";
import type { IApiMegaverse } from "~/api/Megaverse/index.ts";
import type { IMegaverse } from "~/modules/Megaverse/index.ts";
import { Entity, type EntityApiList, type EntityNames, type MegaverseGoal } from "~/model/index.ts";

export class Megaverse implements IMegaverse {
  private readonly apiMegaverse: IApiMegaverse;
  private goal: MegaverseGoal;

  constructor(apiMegaverse = new ApiMegaverse()) {
    this.apiMegaverse = apiMegaverse;
    this.goal = [];
  }

  private async getGoal(): Promise<MegaverseGoal> {
    console.log("Retrieving goal...");

    if (this.goal.length === 0) {
      this.goal = await this.apiMegaverse.getMegaverseGoal();
      console.log("Goal retrieved from remote!");
      return this.goal;
    }

    console.log("Goal retrieved locally!");
    return this.goal;
  }

  private async getGoalData(
    entityName: EntityNames,
    fn: ({ currentEntity, row, column }: { currentEntity: string; row: number; column: number }) => Promise<void>,
  ) {
    const goal = await this.getGoal();
    const rows = goal.length;
    const columns = goal[0].length;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const currentEntity = this.goal[row][column];

        if (currentEntity.includes(entityName)) {
          await fn({ currentEntity, row, column });
        }
      }
    }
  }

  private getExtraEntityData(entityName: EntityNames, fullData: string) {
    if (entityName === "COMETH") {
      const [direction] = fullData.split("_");
      return direction;
    }

    if (entityName === "SOLOON") {
      const [color] = fullData.split("_");
      return color;
    }

    throw new Error(`Error getting extra entity data for ${entityName}`);
  }

  async printAllOfEntity(entity: Entity<EntityApiList>) {
    await this.getGoalData(entity.entityName, async ({ row, column, currentEntity }) => {
      if (entity.entityName === "COMETH") {
        const direction = this.getExtraEntityData(entity.entityName, currentEntity);
        await entity.create({ row, column, direction });
      }

      if (entity.entityName === "SOLOON") {
        const color = this.getExtraEntityData(entity.entityName, currentEntity);
        await entity.create({ row, column, color });
      }

      if (entity.entityName === "POLYANET") {
        await entity.create({ row, column });
      }
    });

    console.log(`All entities of type ${entity.entityName} printed!`);
  }
}
