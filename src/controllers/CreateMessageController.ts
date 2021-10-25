import axios, { AxiosError } from "axios";
import { Request, Response } from "express";

import { CreateMessageService } from "../services/CreateMessageService";

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body;
    const { user_id } = req;

    const createMessageService = new CreateMessageService();

    try {
      const result = await createMessageService.execute(message, user_id);

      return res.json(result);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError<{ message?: string }, any>;

        return res.status(err.response?.status || 400).json({
          message: err.response?.data?.message || err.response?.data,
        });
      }
      return res.status(400).json({ message: (error as Error).message });
    }
  }
}

export { CreateMessageController };
