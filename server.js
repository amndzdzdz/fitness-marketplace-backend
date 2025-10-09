const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const port = process.env.PORT;
const app = express();
connectDB();

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/weight", require("./routes/weightRoutes"));
app.use("/api/workout", require("./routes/workoutRoutes"));
app.use("/api/workoutSession", require("./routes/workoutSessionRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server listening on port: ", port);
});
