const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {
  getWeight,
  setWeight,
  updateWeight,
  deleteWeight,
} = require("../controllers/weightController");

const router = express.Router();

router
  .get("/current", validateToken, getWeight)
  .post("/current", validateToken, setWeight)
  .put("/current", validateToken, updateWeight)
  .delete("/current", validateToken, deleteWeight);

module.exports = router;
