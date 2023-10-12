import { Router } from "express";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.get("/", (req, res) => {
      res.status(200).json({
        message: "All right node server",
      });
    });

    return router;
  }
}
