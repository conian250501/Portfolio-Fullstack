import jwt from "jsonwebtoken";
import { userService } from "../services/user";
export const authMiddleware = {
  verifyToken: async (req, res, next) => {
    try {
      if (req.header("authorization")) {
        const token = req.header("authorization").split(" ")[1];
        const user = jwt.verify(token, `${process.env.JWT_SECRET_KEY}`);
        if (user) {
          req.user = user;
          next();
        }
      } else {
        return res.status(401).json({ message: "Please login first" });
      }
    } catch (error) {
      next(error);
    }
  },
  verifyEmail: async (req, res, next) => {
    try {
      const { email } = req.body;
      const user = await userService.findByEmail(email);
      const isValidEmail = email === user?.email;

      !isValidEmail && res.status(401).json({ message: "Email incorrect" });

      if (user?.verify) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: "Please verify your email" });
      }
    } catch (error) {
      next(error);
    }
  },
};
