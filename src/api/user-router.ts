import { Router } from 'express';
import { sendToChatGPT } from './user-controller';

export const userRouter = Router();

userRouter.post('/', sendToChatGPT);
