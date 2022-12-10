import Users from "../models/user";
import bcrypt from "bcrypt";
import { passwordHelper } from "../helpers/passwordHelper";

export const userService = {
  findById: async (userId) => {
    const user = await Users.findOne({ _id: userId });
    if (user) return user;
  },
  findByEmail: async (email) => {
    const user = await Users.findOne({ email });
    if (user) return user;
  },
  newUser: async (data) => {
    const { email, userName, phone, password } = data;

    // Hash Password
    const passwordHashed = await passwordHelper.hashPassword(password, 10);

    // Create new user
    const newUser = new Users({
      email,
      userName,
      phone,
      password: passwordHashed,
    });
    await newUser.save();
    return newUser;
  },
};
