import dotenv from "dotenv";
dotenv.config();

export default {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT || 4000,
    MONGO_URI: process.env.MONGO_URI || null
};
