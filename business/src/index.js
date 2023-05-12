import express from "express";
import cors from "cors";
import morgan from "morgan";

import businessv1Router from "./router";
import env from "./config/environment";
import {
  return404Error,
  returnError,
  logErrorMiddleware
} from "./config/errors/errorHandler";

const app = express();

const corsOptions = {
  origin: env.ALLOW_ORIGIN,
  methods: ["GET"],
};

if (!["PROD", "PRODUCTION"].includes(env.NODE_ENV.toLocaleUpperCase())) {
  app.use(morgan("dev"));
}
app.set('PORT', env.PORT);
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/v1", cors(corsOptions), businessv1Router);

app.use(return404Error);
app.use(logErrorMiddleware);
app.use(returnError);

module.exports = app;
