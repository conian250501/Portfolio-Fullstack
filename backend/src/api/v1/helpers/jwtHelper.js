import jwt from "jsonwebtoken";

export const jwtToken = (userId) => {
  return jwt.sign(
    { name: `${process.env.JWT_OPTIONS_NAME}`, sub: userId },
    `${process.env.JWT_SECRET_KEY}`,
    { expiresIn: "2d" }
  );
};
