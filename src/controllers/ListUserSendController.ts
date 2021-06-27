import { Request, Response } from "express";

import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendService = new ListUserSendComplimentsService();

    const complimentSend = await listUserSendService.execute(user_id);

    return response.json(complimentSend);
  }
}

export { ListUserSendComplimentsController };
