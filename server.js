const express = require("express");
const connectDB = require("./config/dbConnection");
const dotevn = require("dotenv").config();

const port = process.env.PORT;
const app = express();
connectDB();

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
