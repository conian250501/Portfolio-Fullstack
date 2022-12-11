import express from "express";
import { userController } from "../controllers/user";
import { routerHelper, schemas } from "../helpers/routerHelper";
import { authMiddleware } from "../middlewares/auth";
import passport from "passport";
export const userRouter = express.Router();
userRouter.get("/", authMiddleware.verifyToken, userController.getProfile);
userRouter.patch("/:userId", authMiddleware.verifyToken, userController.updateUser);
userRouter.delete("/:userId", authMiddleware.verifyToken, userController.deleteUser);
