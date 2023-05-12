import app from "../index";
import database from "../database/mongoose";
import env from "../config/environment";
import logger from '../config/logger';

const server = app.listen(app.get("PORT"), () =>
  logger.info(`Listening in port ${app.get("PORT")}`)
);
database(env);

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = error => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
