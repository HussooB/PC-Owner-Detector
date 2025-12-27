import { Router } from "express";
import { getAllLogs, getLogsByDevice } from "./log.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/role.middleware.js";

const router = Router();

// ADMIN only
router.get("/", authMiddleware, requireRole("ADMIN"), getAllLogs);

// ADMIN or SECURITY
router.get(
  "/device/:deviceId",
  authMiddleware,
  requireRole("ADMIN"),
  getLogsByDevice
);

export default router;
