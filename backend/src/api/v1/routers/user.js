import express from "express";
import { userController } from "../controllers/user";
import { routerHelper, schemas } from "../helpers/routerHelper";
import { authMiddleware } from "../middlewares/auth";
import passport from "passport";
export const userRouter = express.Router();
userRouter.get("/", authMiddleware.verifyToken, userController.getProfile);
userRouter.patch(
  "/update",
  authMiddleware.verifyToken,
  routerHelper.validateBody(schemas.updateUserSchema),
  userController.updateUser
);
userRouter.delete(
  "/:userId",
  authMiddleware.verifyToken,
  routerHelper.validateParams(schemas.idSchema, "userId"),
  userController.deleteUser
);
