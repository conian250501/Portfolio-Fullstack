import { userService } from "../services/user";

export const roleMiddleware = {
  verifyRole: async (req, res, next) => {
    const { user } = req;

    const currentUser = await userService.findById(user.userId);
    if (currentUser?.isAdmin) {
      req.currentUser = currentUser;
      next();
    } else {
      res.status(200).json({ message: "You dont have permission to access" });
    }
  },
};
