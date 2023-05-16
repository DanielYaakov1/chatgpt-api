import { openai } from '../config/config-chatgpt';

interface ICreateChat {
     model: string;
     message: string;
}

export class UserHandler {
     async createUserChat(message: string): Promise<any> {
          const res = await openai.createChatCompletion({
               model: 'gpt-3.5-turbo',
               messages: [{ role: 'user', content: message }],
          });
          return res;
     }
}
