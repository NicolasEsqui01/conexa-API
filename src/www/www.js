import app from '../index';
import logger from '../config/logger';
import dataBase from '../database/mongoose';
import config from '../config/environment';

app.listen(3000, () => logger.info('Listening in port 3000'));

dataBase(config);
