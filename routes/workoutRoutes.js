const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getWorkout,
  updateWorkout,
  createWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");
const router = express.Router();

router
  .get("/", validateToken, getWorkout)
  .put("/", validateToken, updateWorkout)
  .post("/", validateToken, createWorkout)
  .delete("/", validateToken, deleteWorkout);

module.exports = router;
