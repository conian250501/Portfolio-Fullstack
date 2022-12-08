import bcrypt from "bcrypt";
import Users from "../models/user";
export const passwordHelper = {
  hashPassword: async (password, saltRounds) => {
    const passwordHased = await bcrypt.hash(password, saltRounds);
    return passwordHased;
  },
  comparePassword: async (email, password) => {
    const user = await Users.findOne({ email });
    if (!user) return false;
    const isValidPassword = await bcrypt.compare(password, `${user?.password}`);
    return isValidPassword;
  },
};
