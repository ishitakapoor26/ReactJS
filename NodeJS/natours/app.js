const express = require("express");
const fs = require("fs");
const morgan = require("morgan"); // Import morgan
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const app = express();
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

// Global Middleware to log HTTP requests (dev format)

// Set security HTTP
app.use(helmet());

// Development logging
app.use(morgan("dev"));

// Middleware to parse JSON bodies
app.use(express.json({ limit: "10kb" }));

// Data sanitization against nosql query injection

app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Set request limits
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

// Prevent Parameter pollution
app.use(
  hpp({
    // allows duplicate properties
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "difficulty",
      "price",
    ],
  })
);

// Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

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
