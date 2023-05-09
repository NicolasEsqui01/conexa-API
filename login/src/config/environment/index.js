import { config } from 'dotenv';
config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  NODE_PORT: process.env.PORT || 3000,
  JWT_EXPIRE: Number(process.env.JWT_EXPIRE) || null,
  JWT_SECRET: process.env.JWT_SECRET || null,
  INTERNAL_URL: process.env.INTERNAL_URL || null,
  SALT: Number(process.env.SALT) || null,
  MONGO_URI: process.env.MONGO_URI || null,
};
