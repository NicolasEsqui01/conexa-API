import express from 'express';
import morgan from 'morgan';

import userV1routes from './routes';
import env from './config/environment'
import {
  returnError,
  logErrorMiddleware,
  return404Error,
} from './config/errors/errorHandler';

const app = express();

if(!["PROD","PRODUCTION"].includes(env.NODE_ENV.toLocaleUpperCase())){
  app.use(morgan('dev'));
};

app.set('PORT', env.PORT);
app.use(express.urlencoded());
app.use(express.json());

app.use('/api/v1', userV1routes);

app.use(return404Error);
app.use(logErrorMiddleware);
app.use(returnError);

export default app;
