import { AppRoutes } from "./presentation/routes";
import { NodeServer } from "./presentation/server";

(() => {
  main();
})();

async function main() {
  // todo : await base de datos
  // code
  // todo: inicio de nustro server

  new NodeServer({
    port: 3000,
    routes: AppRoutes.routes,
  }).start();
}
