import passport from "passport";
import JwtStrategy from "passport-jwt";
import { passportConfig } from "../configs/passportConfig";
import { userService } from "../services/user";

export const passportJWT = passport.use(
  new JwtStrategy.Strategy(
    {
      jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: passportConfig.jwt.secretKey,
    },
    async (payload, done) => {
      try {
        const user = await userService.findById(payload.userId);
        if (!user) return done(null, false);
        return done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);
