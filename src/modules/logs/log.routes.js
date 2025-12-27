import { Router } from "express";
import { getAllLogs, getLogsByDevice } from "./log.controller.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { requireRole } from "../../middlewares/role.middleware.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Logs
 *   description: Device logs
 */

/**
 * @swagger
 * /api/logs:
 *   get:
 *     summary: Get all logs (Admin only)
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of logs
 */
router.get("/", authMiddleware, requireRole("ADMIN"), getAllLogs);

/**
 * @swagger
 * /api/logs/device/{deviceId}:
 *   get:
 *     summary: Get logs by device (Admin only)
 *     tags: [Logs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: deviceId
 *         required: true
 *         schema:
 *           type: string
 *         description: Device ID
 *     responses:
 *       200:
 *         description: Logs for the device
 */
router.get("/device/:deviceId", authMiddleware, requireRole("ADMIN"), getLogsByDevice);

export default router;
