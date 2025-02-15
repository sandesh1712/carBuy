import { Router } from "express";
import { userController } from "./intializers/user";

const userRouter = Router();

userRouter.post("/", userController.register);

export default userRouter;