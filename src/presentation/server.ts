import { Router } from "express";
import express from "express";

interface Options {
  port: number;
  routes: Router;
}

export class NodeServer {
  public readonly app = express();
  private readonly port: number;
  public severListener: any;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  public async start() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(this.routes);

    this.severListener = this.app.listen(this.port, () => {
      console.log(`[Server] running on port ${this.port}`);
    });
  }

  public close() {
    this.severListener.close();
  }
}
