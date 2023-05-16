import { Request, Response, NextFunction } from 'express';
import { UserHandler } from './user-handler';

export const sendToChatGPT = async (req: Request, res: Response, next: NextFunction) => {
     try {
          const userHandler = new UserHandler();
          const { message } = req.body;
          const response = await userHandler.createUserChat(String(message));
          res.status(200).send({ response: response.data.choices[0] });
     } catch (err) {
          next(err);
     }
};
