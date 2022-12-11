import Joi from "joi";

export const schemas = {
  idSchema: Joi.object({
    param: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  authRegisterSchema: Joi.object({
    email: Joi.string().email().required(),
    userName: Joi.string().min(4).required(),
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      .required(),
    confirmPassword: Joi.ref("password"),
  }),
  authLoginSchema: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

export const routerHelper = {
  validateParams: (schema, name) => {
    return (req, res, next) => {
      const result = schema.validate({ param: req.params[name] });
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        next();
      }
    };
  },

  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        res.status(400).json({ message: result.error.details[0].message });
      } else {
        next();
      }
    };
  },
};
