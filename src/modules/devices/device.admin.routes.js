import { Router } from "express";
import {
  getAllDevices,
  getStolenDevices,
} from "./device.admin.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/role.middleware.js";

const router = Router();

router.get("/", authMiddleware, requireRole("ADMIN"), getAllDevices);
router.get("/stolen", authMiddleware, requireRole("ADMIN"), getStolenDevices);

export default router;
