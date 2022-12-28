import express from "express";
import { typeProjectController } from "../controllers/typeProject";
import { authMiddleware } from "../middlewares/auth";
import { roleMiddleware } from "../middlewares/role";
export const typeProjectRouter = express.Router();

typeProjectRouter.get(
  "/all",
  authMiddleware.verifyToken,
  typeProjectController.getAllType
);
typeProjectRouter.post(
  "/create",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  typeProjectController.createType
);
typeProjectRouter.patch(
  "/update/:typeId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  typeProjectController.updateType
);
typeProjectRouter.delete(
  "/delete/:typeId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  typeProjectController.deleteType
);
