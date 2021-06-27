import { Request, Response } from "express";

import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveService = new ListUserReceiveComplimentsService();

    const complimentReceive = await listUserReceiveService.execute(user_id);

    return response.json(complimentReceive);
  }
}

export { ListUserReceiveComplimentsController };
