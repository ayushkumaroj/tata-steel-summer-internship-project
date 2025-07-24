import {
  createQueueTime,
  updateQueueTime,
  deleteQueueTime,
  getQueueTime
} from '../controllers/QueueTime.controller.js';

import {
  createStrikeRate,
  updateStrikeRate,
  deleteStrikeRate,
  getStrikeRates
} from '../controllers/Strikerate.controller.js';

import {
  createRunRate,
  updateRunRate,
  deleteRunRate,
  getRunRates
} from "../controllers/Runrate.controller.js";

import {
  createYield,
  deleteYield,
  updateYield,
  getYields
} from '../controllers/Yield.controller.js';

import express from 'express';
const router = express.Router();

// Strike Rate
router.post("/strike-rate/:location", createStrikeRate);
router.get("/strike-rate/:location", getStrikeRates);
router.put("/strike-rate/:location/:id", updateStrikeRate);
router.delete("/strike-rate/:location/:id", deleteStrikeRate);

// Queue Time
router.post("/queue-time/:location", createQueueTime);
router.get("/queue-time/:location", getQueueTime);
router.put("/queue-time/:location/:id", updateQueueTime);
router.delete("/queue-time/:location/:id", deleteQueueTime);

// Run Rate
router.post("/run-rate/:location", createRunRate);
router.get("/run-rate/:location", getRunRates);
router.put("/run-rate/:location/:id", updateRunRate);
router.delete("/run-rate/:location/:id", deleteRunRate);

// Yield
router.post("/yield/:location", createYield);
router.get("/yield/:location", getYields);
router.put("/yield/:location/:id", updateYield);
router.delete("/yield/:location/:id", deleteYield);

export default router;
