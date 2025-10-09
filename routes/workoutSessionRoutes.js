const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getWorkoutSessions,
  getWorkoutSession,
  createWorkoutSession,
} = require("../controllers/workoutSessionController");
const router = express.Router();

router
  .get("/", validateToken, getWorkoutSession)
  .post("/", validateToken, createWorkoutSession);
router.get("/all", validateToken, getWorkoutSessions);

module.exports = router;
