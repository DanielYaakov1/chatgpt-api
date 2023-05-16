import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import { userRouter } from './src/api/user-router';
import errorHandleMiddleware from './src/middleware/errorHandle';

const port = process.env.APP_PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use(errorHandleMiddleware);

app.listen(port, () => {
     console.log(`Server listening on port ${port}`);
});
