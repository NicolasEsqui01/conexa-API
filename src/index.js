import express from 'express';
import userV1routes from './routes';

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use('/api/v1', userV1routes);

export default app;
