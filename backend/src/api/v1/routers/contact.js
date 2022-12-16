import express from "express";
import { contactController } from "../controllers/contact";
import { authMiddleware } from "../middlewares/auth";
import { roleMiddleware } from "../middlewares/role";
import { routerHelper, schemas } from "../helpers/routerHelper";

export const contactRouter = express.Router();
contactRouter.get("/get-all", contactController.getAll);
contactRouter.get("/:contactId", contactController.getDetail);
contactRouter.post(
  "/create",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.createContact),
  contactController.create
);
contactRouter.put(
  "/update/:contactId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.updateContact),
  contactController.update
);
contactRouter.delete(
  "/delete/:contactId",
  authMiddleware.verifyToken,
  roleMiddleware.verifyRole,
  routerHelper.validateBody(schemas.updateContact),
  contactController.delete
);
