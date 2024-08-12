import express from "express";
import {
  getDashboardData,
  updateDashboardData,
} from "../controller/dashboardController.js";

const router = express.Router();

// router.get("/", getDashboardData);
router.patch("/", updateDashboardData);
router.get("/", getDashboardData);

export default router;
