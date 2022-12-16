import express from "express";
import { skillController } from "../controllers/skill";
import { authMiddleware } from "../middlewares/auth";
import { roleMiddleware } from "../middlewares/role";
import { routerHelper, schemas } from "../helpers/routerHelper";
export const skillRouter = express.Router();

skillRouter.get("/get-all", skillController.getAll);
skillRouter.get("/:skillId", skillController.getDetail);
skillRouter.post(
  "/create",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.createSkill),
  skillController.create
);
skillRouter.put(
  "/update/:skillId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.updateSkill),
  skillController.update
);
skillRouter.delete(
  "/delete/:skillId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  skillController.delete
);
