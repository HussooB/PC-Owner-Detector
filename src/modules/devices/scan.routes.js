import { Router } from "express";
import { scanDevice } from "./scan.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/role.middleware.js";

const router = Router();

router.post(
  "/scan",
  authMiddleware,
  requireRole("SECURITY"),
  scanDevice
);

export default router;
