const express = require("express");
const dotevn = require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
