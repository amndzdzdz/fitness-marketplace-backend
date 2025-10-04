const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router
  .get("/current", validateToken, getWeight)
  .put("/current", validateToken, setWeight)
  .put("/current", validateToken, updateWeight)
  .delete("/current", validateToken, deleteWeight);

module.exports = router;
