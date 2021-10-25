import axios, { AxiosError } from "axios";
import { Request, Response } from "express";

import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const getLast3MessagesService = new GetLast3MessagesService();

    try {
      const result = await getLast3MessagesService.execute();

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

export { GetLast3MessagesController };
