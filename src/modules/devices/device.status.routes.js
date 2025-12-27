import { Router } from "express";
import { updateDeviceStatus } from "./device.status.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

router.patch("/:id/status", authMiddleware, updateDeviceStatus);

export default router;
