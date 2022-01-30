const HttpError = require("../models/http-error");

const errorHandling = (error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ error: error.message || "An unknown error occured" });
};

const routeErrorHandler = (req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  return next(error);
};

const commonErrorHandler = (message, code) => {
  return new HttpError(message, code);
};

const getErrorMessage = ({ errors }) => {
  const errorFields = errors.map((error) => error.param).join();
  return `Invalid input for fields ${errorFields}`;
};

exports.errorHandling = errorHandling;
exports.routeErrorHandler = routeErrorHandler;
exports.commonErrorHandler = commonErrorHandler;

exports.getErrorMessage = getErrorMessage;
