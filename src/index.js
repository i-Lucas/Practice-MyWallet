import express from 'express';
import cors from 'cors';
import handleErrorsMiddleware from "./middlewares/handleErrorsMiddleware.js";
import router from './routers/index.js';
import './config/setup.js'

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);
});

export default app;