const express = require("express");
const bodyParser = require("body-parser");
const errorMiddleware = require("./Middleware/error");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api/v1", projectRoutes);
app.use("/api/v1", userRoutes);

app.use(errorMiddleware);

module.exports = app;
