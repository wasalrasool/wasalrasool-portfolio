const dotenv = require("dotenv");
const app = require("./app");

const connectDatabase = require("./config/dataBase");

// handling uncaught exception error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to uncaught Exception`);

  server.close(() => {
    process.exit(1);
  });
});

// will add cloudinary later

dotenv.config({ path: "backend/config/config.env" });

// Data Base connection
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server due to unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
