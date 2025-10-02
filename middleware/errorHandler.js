const {
  VALIDATION_ERROR,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  TIME_OUT,
  SERVER_ERROR,
} = require("../ constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case VALIDATION_ERROR:
      res.status(statusCode).json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;

    case UNAUTHORIZED:
      res.status(statusCode).json({
        title: "Required permissions are missing",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case FORBIDDEN:
      res.status(statusCode).json({
        title: "Access forbidden",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case NOT_FOUND:
      res.status(statusCode).json({
        title: "Not found",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case TIME_OUT:
      res.status(statusCode).json({
        title: "Time out",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    case SERVER_ERROR:
      res.status(statusCode).json({
        title: "Server error",
        message: err.message,
        stackTrace: err.stackTrace,
      });
      break;
    default:
      res.status(500).json({
        title: "Unexpected error",
        message: err.message || "Something went wrong",
        stack: err.stack,
      });
  }
};

module.exports = errorHandler;
