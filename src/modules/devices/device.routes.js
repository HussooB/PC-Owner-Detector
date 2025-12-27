import { Router } from "express";
import { registerDevice } from "./device.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
const router = Router();

router.post("/", authMiddleware, registerDevice);

export default router;
