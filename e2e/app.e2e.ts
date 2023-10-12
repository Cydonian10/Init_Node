import { AppRoutes } from "../src/presentation/routes";
import { NodeServer } from "../src/presentation/server";
import supertest from "supertest";

describe("Pruebas al app", () => {
  let app: NodeServer;
  let api: supertest.SuperTest<supertest.Test>;

  beforeEach(() => {
    app = new NodeServer({
      port: 4000,
      routes: AppRoutes.routes,
    });

    app.start();
    api = supertest(app.severListener);
  });

  test("/", async () => {
    const resp = await api.get("/");
    expect(resp.statusCode).toEqual(200);
  });
  test("/ resp body message", async () => {
    const resp = await api.get("/");
    expect(resp.body).toMatchObject({
      message: "All right node server",
    });
  });

  afterEach(() => {
    app.close();
  });
});
