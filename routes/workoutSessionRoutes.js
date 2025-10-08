const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router
  .get("/", validateToken)
  .put("/", validateToken)
  .post("/", validateToken)
  .delete("/", validateToken);

module.exports = router;
