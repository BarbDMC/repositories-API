import express from 'express';
import repositoriesRouter from './routes/repositoriesRouter.js';

const app = express();
const port = 3000;

app.use(repositoriesRouter);

app.listen(port);

export default app;