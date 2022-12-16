import express from "express";
import { authRouter } from "./auth";
import { linkRouter } from "./linkRouter";
import { projectRouter } from "./project";
import { skillRouter } from "./skill";
import { typeProjectRouter } from "./typeProject";
import { userRouter } from "./user";
export const apiRouter = express.Router();

apiRouter.use("/skill", skillRouter);
apiRouter.use("/link", linkRouter);
apiRouter.use("/types_project", typeProjectRouter);
apiRouter.use("/project", projectRouter);

apiRouter.use("/user", userRouter);
apiRouter.use(authRouter);
