import { config } from 'dotenv';
config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  NODE_PORT: process.env.PORT || 3000,
  JWT_EXPIRE: process.env.JWT_EXPIRE || null,
  JWT_SECRET: process.env.JWT_SECRET || null,
  SALT: process.env.SALT || null,
  DB_URI: process.env.URI || null,
};
