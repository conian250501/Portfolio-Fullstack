import Joi from "joi";

export const schemas = {
  idSchema: Joi.object({
    param: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  authRegister: Joi.object({
    email: Joi.string().email().required(),
    userName: Joi.string().min(4).required(),
    password: Joi.string()
      .min(8)
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
      .required(),
    confirmPassword: Joi.ref("password"),
  }),
  authLogin: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  updateUser: Joi.object({
    avatar: Joi.string().required(),
    userName: Joi.string(),
    nickName: Joi.string(),
    phone: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    introduce: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
  }),
  createProject: Joi.object({
    image: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    type: Joi.string().required(),
    links: Joi.array(),
    technologicals: Joi.array(),
  }),
  updateProject: Joi.object({
    image: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
    type: Joi.string().required(),
    links: Joi.array(),
    technologicals: Joi.array(),
  }),
  createLink: Joi.object({
    lable: Joi.string().required(),
    url: Joi.string().required(),
  }),
  updateLink: Joi.object({
    lable: Joi.string(),
    url: Joi.string(),
  }),
  createSkill: Joi.object({
    image: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
  updateSkill: Joi.object({
    image: Joi.string(),
    name: Joi.string(),
    description: Joi.string(),
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
