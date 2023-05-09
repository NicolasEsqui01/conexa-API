import mongoose from 'mongoose';
import logger from '../config/logger';

const connect = async (env) => {
  try {
    await mongoose.connect(env.MONGO_URI);
    logger.info('Connection successfully');
  } catch (e) {
    logger.error('Connection was not successfully');
  }
};

export default connect;
