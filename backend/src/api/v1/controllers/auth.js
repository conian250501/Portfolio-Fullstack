import { jwtToken } from "../helpers/jwtHelper";
import { passwordHelper } from "../helpers/passwordHelper";
import { userService } from "../services/user";
import { confirmEmail } from "../utils/confirmMail";

export const authController = {
  verifyEmail: async (req, res, next) => {
    try {
      const { token } = req.params;
      const user = await userService.findByToken(token);

      if (!user) return res.status(200).json({ message: "Token invalid" });

      user.verify = true;
      user.token = null;
      await user.save();

      res.redirect("http://localhost:3000/");
    } catch (error) {
      next(error);
    }
  },
  register: async (req, res, next) => {
    try {
      const { email } = req.body;

      // CHECK User exists
      const userAlready = await userService.findByEmail(email);
      if (userAlready) {
        return res.status(200).json({ message: "User exists already" });
      }

      // CREATE NEW USER
      const user = await userService.newUser(req.body);

      // CREATE TOKEN
      const token = jwtToken(user._id);
      res.setHeader("access_token", token);

      // SAVE TOKEN TO DATABASE
      user.token = token;
      await user.save();

      // CONFIRM EMAIL
      const subject = "Confirm your account here";
      const html = `
      <h4>Thanks you for register <3</h4>
      <p>Please confirm email to verify your account</p>
      <a href="${process.env.BASE_URL}/api/v1/verify-email/${token}">Verify email</a>
      `;
      const isSendMail = await confirmEmail(email, subject, html);

      if (user && isSendMail) {
        res
          .status(200)
          .json({ data: user, message: "Registration successful" });
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
      const user = await userService.findById(req.user._id);
      if (!user) return res.status(401).json({ message: "User dont exits" });

      const isValidEmail = email === user.email;
      !isValidEmail && res.status(401).json({ message: "Email incorrect" });

      // CHECK PASSWORD
      const isValidPassword = await passwordHelper.comparePassword(
        email,
        password
      );

      !isValidPassword &&
        res.status(401).json({ message: "Password incorrect" });

      const token = jwtToken(user._id);
      res.setHeader("access_token", token);
      res.status(200).json({ data: user, message: "Login successful" });
    } catch (error) {
      next(error);
    }
  },
  logout: async (req, res, next) => {
    try {
      const { user } = req;
      const currentUser = await userService.findById(user.userId);
      if (currentUser) {
        return res.status(200).json({ message: "Logout successfully" });
      } else {
        res.status(401).send({ message: "User not logged in" });
      }
    } catch (error) {
      next(error);
    }
  },
  checkLogin: async (req, res, next) => {
    console.log(req.user);
    return res.status(200).json({ isLoggedIn: true });
  },
};
