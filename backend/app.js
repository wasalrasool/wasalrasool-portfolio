const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const errorMiddleware = require("./Middleware/error");
const fileUpload = require("express-fileupload");
const path = require("path");

const cookieParser = require("cookie-parser");
const cors = require("cors");
if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "backend/config/config.env" });
}

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const projectRoutes = require("./routes/projectRoutes");
const userRoutes = require("./routes/userRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
app.use("/api/v1", projectRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", resumeRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.use(errorMiddleware);

module.exports = app;
