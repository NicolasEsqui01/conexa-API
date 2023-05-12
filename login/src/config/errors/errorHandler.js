import Api404Error from './api404Error';
import logger from '../logger';
import httpStatusCode from './httpStatusCode';

const logError = function (err) {
  logger.error(err);
};

const logErrorMiddleware = function (err, req, res, next) {
  logError(err);
  next(err);
};

const return404Error = function (req, res, next) {
  const error404 = new Api404Error(`Cannot find the url ${req.url}`);
  res.status(error404.statusCode).json({
    status: error404.description,
    data: { error: error404.name },
  });
};

const returnError = function (err, req, res, next) {
  const status = err?.status;
  res.status(httpStatusCode[status] || 500).json({
    status,
    data: {
      error: err?.message || '',
    },
  });
};

export { return404Error, logError, logErrorMiddleware, returnError };
