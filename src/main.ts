import "https://deno.land/std@0.198.0/dotenv/load.ts";
import { Cometh, Megaverse, Polyanet, Soloon } from "~/modules/index.ts";

const megaverse = new Megaverse();

await megaverse.printAllOfEntity(new Polyanet());
await megaverse.printAllOfEntity(new Cometh());
await megaverse.printAllOfEntity(new Soloon());
