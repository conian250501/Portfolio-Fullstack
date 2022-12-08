import express from "express";
import { userController } from "../controllers/user";
import { routerHelper, schemas } from "../helpers/routerHelper";

export const userRouter = express.Router();

userRouter.post(
  "/register",
  routerHelper.validateBody(schemas.authRegisterSchema),
  userController.register
);
userRouter.post("/login", routerHelper.validateBody(schemas.authLoginSchema), userController.login);
userRouter.get("/logout", userController.logout);
