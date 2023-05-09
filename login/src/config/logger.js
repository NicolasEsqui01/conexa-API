import { createLogger, transports, format } from 'winston';
import env from './environment';

const logger = createLogger({
  level: env === 'dev' ? 'debug' : 'info',
  format: format.combine(format.simple(), format.colorize()),
  transports: [new transports.Console({})],
});

export default logger;
