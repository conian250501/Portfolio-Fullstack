import express from "express";
import { authRouter } from "./auth";
import { userRouter } from "./user";
export const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use(authRouter);
