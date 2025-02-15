import UserController from "../../controllers/user.controller";
import User from "../../models/User";
import UserService from "../../services/user.service";

export const userRepo = User.getRepository();
export const userService = new UserService(userRepo);
export const userController = new UserController(userService);