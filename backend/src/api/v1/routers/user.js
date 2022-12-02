import express from "express";
export const userRouter = express.Router();

userRouter.get("/users", (req, res, next) => {
  res.json({
    message: "Success",
  });
});
