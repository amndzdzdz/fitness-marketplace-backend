const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getWorkouts,
  getWorkout,
  updateWorkout,
  createWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

router
  .post("/", validateToken, createWorkout)
  .get("/", validateToken, getWorkout)
  .delete("/", validateToken, deleteWorkout)
  .put("/", validateToken, updateWorkout);

router.get("/all", validateToken, getWorkouts);

module.exports = router;
