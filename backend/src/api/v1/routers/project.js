import express from "express";
import { projectController } from "../controllers/project";
import { routerHelper, schemas } from "../helpers/routerHelper";
import { authMiddleware } from "../middlewares/auth";
import { roleMiddleware } from "../middlewares/role";
export const projectRouter = express.Router();

projectRouter.get("/get_all", projectController.getAll);
projectRouter.get("/type", projectController.getProjectByType);
projectRouter.get(
  "/:projectId",
  routerHelper.validateParams(schemas.idSchema, "projectId"),
  projectController.getProject
);
projectRouter.post(
  "/create",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.createProject),
  projectController.createProject
);
projectRouter.patch(
  "/update/:projectId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.updateProject),
  projectController.updateProject
);
projectRouter.delete(
  "/:projectId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  projectController.deleteProject
);
