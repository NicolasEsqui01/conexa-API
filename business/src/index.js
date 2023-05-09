import express from "express"
import cors from "cors"
import businessv1Router from "./router"
import env from './config/environment'

const app = express();


app.use(cors({
    origin: 'http://127.0.0.1:3000',
    methods: 'GET'
}))
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/v1", businessv1Router);

module.exports = app;