const AppError = require("./../utils/appError");

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400); // CastError is typically a 400 Bad Request
};

const handleDuplicateErrorDB = (err) => {
  let value;
  if (err.errmsg) {
    const match = err.errmsg.match(/(["'])(\\?.)*?\1/);
    if (match) {
      console.log(match);
      value = match[0];
    }
  }

  // Debugging log to check the error object structure
  console.log("Duplicate error debug info:", err);

  const message = value
    ? `Duplicate field value: ${value}. Please use another value!`
    : "Duplicate field value. Please use another value!";
  return new AppError(message, 400); // Duplicate error is typically a 400 Bad Request
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error: don't leak error details
  } else {
    console.error("ERROR :(", err);

    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err, name: err.name, message: err.message }; // Ensure name and message are copied

    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateErrorDB(error);

    sendErrorProd(error, res);
  }
};
