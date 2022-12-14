import jwt from "jsonwebtoken";
import { userService } from "../services/user";
export const userController = {
  getProfile: async (req, res, next) => {
    try {
      const { user } = req;
      const currentUser = await userService.findById(user.userId);
      if (currentUser) return res.status(200).json({ data: currentUser, message: "Successfully" });
      res.status(200).json({ message: "User not found" });
    } catch (error) {
      next(error);
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const { user } = req;
      const currentUser = await userService.findById(user.userId);
      const userUpdated = await userService.updateUser(req.body, currentUser._id);
      if (userUpdated) {
        res.status(200).json({ message: "User updated" });
      } else {
        res.status(200).json({ message: "Update failed" });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const { user } = req;
      const { userId } = req.params;
      const currentUser = await userService.findById(user.userId);
      if (currentUser?.isAdmin) {
        const userToDelete = await userService.findById(userId);
        if (userToDelete) {
          await userService.deleteUser(userToDelete);
          res.status(200).json({ message: "Delete user successfully" });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(200).json({ message: "You dont have permission to delete this user" });
      }
    } catch (error) {
      next(error);
    }
  },
};
