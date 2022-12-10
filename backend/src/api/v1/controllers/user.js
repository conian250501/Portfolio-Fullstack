import jwt from "jsonwebtoken";
import { userService } from "../services/user";
export const userController = {
  getProfile: async (data, req, res, next) => {
    try {
      console.log(data);
      const user = await userService.findById(data.userId);
      return res.status(200).json({ data: user, message: "Successfully" });
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {},
  deleteUser: async (req, res, next) => {},
};
