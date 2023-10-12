"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.get("/", (req, res) => {
            res.json({
                message: "All right node server",
            });
        });
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map