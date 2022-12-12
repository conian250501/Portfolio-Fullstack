import jwt from "jsonwebtoken";
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
};
