import express from "express";
import { authController } from "../controllers/auth";
import { routerHelper, schemas } from "../helpers/routerHelper";
import { authMiddleware } from "../middlewares/auth";
import passport from "passport";
import { passportJWT } from "../middlewares/passport";
export const authRouter = express.Router();

// AUTH
authRouter.post(
  "/register",
  routerHelper.validateBody(schemas.authRegisterSchema),
  authController.register
);
authRouter.post("/login", routerHelper.validateBody(schemas.authLoginSchema), authController.login);
authRouter.get("/logout", authController.logout);
authRouter.get(
  "/logged_in",
  // passport.authenticate("jwt", { session: false }),
  authMiddleware.verifyToken,
  authController.checkLogin
);
