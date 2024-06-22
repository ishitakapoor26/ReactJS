const express = require("express");
const fs = require("fs");
const morgan = require("morgan"); // Import morgan
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const app = express();
const tourRouter = require("./routes/tourRouter");

// Middleware to log HTTP requests (dev format)
app.use(morgan("dev"));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/v1/tours", tourRouter);

app.all("*", (req, res, next) => {
  // res.status(404).json({
  //   status: "fail",
  //   message: `Can't find ${req.originalUrl} on this server!`,
  // });
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // (err.status = "fail"), (err.statusCode = 404);
  // next(err);
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
