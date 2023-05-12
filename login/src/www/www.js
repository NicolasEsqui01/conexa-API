import app from '../index';
import logger from '../config/logger';
import dataBase from '../database/mongoose';
import config from '../config/environment';

const server = app.listen(app.get('PORT'), () => logger.info(`Listening in port ${app.get('PORT')}`));
dataBase(config);

const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
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

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);
