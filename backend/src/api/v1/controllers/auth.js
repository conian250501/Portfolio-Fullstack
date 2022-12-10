import { jwtToken } from "../helpers/jwtHelper";
import { passwordHelper } from "../helpers/passwordHelper";
import { userService } from "../services/user";

export const authController = {
  register: async (req, res, next) => {
    try {
      const { email } = req.body;

      // CHECK User exists
      const userAlready = await userService.findByEmail(email);

      if (userAlready) {
        return res.status(200).json({ message: "User exists already" });
      }

      // Regist a new user
      const user = await userService.newUser(req.body);

      if (user) {
        res.status(200).json({ data: user, message: "Registration successful" });
      } else {
        res.status(401).json({ message: "Registration failed" });
      }
    } catch (error) {
      next(error);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // CHECK EMAIL
      const user = await userService.findByEmail(email);
      if (!user) return res.status(401).json({ message: "User dont exists" });

      // CHECK PASSWORD
      const isValidPassword = await passwordHelper.comparePassword(email, password);

      if (isValidPassword) {
        // CREATE TOKEN
        const token = jwtToken(user._id);
        res.setHeader("access_token", token);

        res.status(200).json({ data: user, message: "Login successful" });
      } else {
        res.status(401).json({ message: "Password incorrect" });
      }
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {},
  checkLogin: async (req, res, next) => {
    console.log(req.user);
    return res.status(200).json({ isLoggedIn: true });
  },
};
