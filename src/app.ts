import { Database } from "./config/data-source";
import { AppRoutes } from "./presentation/routes";
import { NodeServer } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  await Database.connect({
    type: "sqlite",
    database: "db.sql",
    entities: [],
    synchronize: true,
  });

  new NodeServer({
    port: 3000,
    routes: AppRoutes.routes,
  }).start();
}
