import { Router } from "express";

import { AuthenticateUserController } from "../controllers/AuthenticateUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { CreateTagController } from "../controllers/CreateTagController";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUserReceiveComplimentsController } from "../controllers/ListUserReceiveController";
import { ListUserSendComplimentsController } from "../controllers/ListUserSendController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthentucated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendController = new ListUserSendComplimentsController();
const listUserReceiveController = new ListUserReceiveComplimentsController();

router.post("/users", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post("/login", authenticateUserController.handle);
router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendController.handle
);
router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReceiveController.handle
);

export { router };
