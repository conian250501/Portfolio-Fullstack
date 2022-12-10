import express from "express";
import { userController } from "../controllers/user";
import { routerHelper, schemas } from "../helpers/routerHelper";
import { authMiddleware } from "../middlewares/auth";
import passport from "passport";
import { passportJWT } from "../middlewares/passport";
export const userRouter = express.Router();

userRouter.post(
  "/register",
  routerHelper.validateBody(schemas.authRegisterSchema),
  userController.register
);
userRouter.post("/login", routerHelper.validateBody(schemas.authLoginSchema), userController.login);
userRouter.get("/logout", userController.logout);
userRouter.get(
  "/logged_in",
  // passport.authenticate("jwt", { session: false }),
  authMiddleware.verifyToken,
  userController.checkLogin
);
