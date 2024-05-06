const express = require("express");
const fs = require("fs");
const morgan = require("morgan"); // Import morgan
const app = express();
const tourRouter = require("./routes/tourRouter");

// Middleware to log HTTP requests (dev format)
app.use(morgan("dev"));

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/v1/tours", tourRouter);

module.exports = app;
