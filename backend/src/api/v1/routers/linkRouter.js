import express from "express";
import { linkController } from "../controllers/link";
import { authMiddleware } from "../middlewares/auth";
import { roleMiddleware } from "../middlewares/role";
import { routerHelper, schemas } from "../helpers/routerHelper";
export const linkRouter = express.Router();

linkRouter.post(
  "/create",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.createLink),
  linkController.createLink
);
linkRouter.patch(
  "/update/:linkId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.updateLink),
  linkController.updateLink
);
linkRouter.delete("/delete/:linkId", linkController.deleteLink);
