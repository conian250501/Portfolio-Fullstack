import Skill from "../models/skill";
import Users from "../models/user";
import { skillService } from "../services/skill";

export const skillController = {
  getAll: async (req, res, next) => {
    try {
      const skills = await skillService.getAll();
      skills
        ? res
            .status(200)
            .json({ data: skills, message: "Get skills successfully" })
        : res.status(200).json({ message: "You dont have any skills" });
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { skillId } = req.params;
      const skill = await skillService.getDetail(skillId);
      skill
        ? res
            .status(200)
            .json({ data: skill, message: "Get skill successfully" })
        : res.status(200).json({ message: "Skill not found" });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { image, name, description } = req.body;
      const { userId } = req.user;
      const skill = await skillService.create(image, name, description, userId);

      skill
        ? res.status(200).json({ data: skill, message: "Created Successfully" })
        : res.status(200).json({ message: "Create Failed" });
    } catch (error) {
      next(error);
    }
  },

  update: async (req, res, next) => {
    try {
      const { skillId } = req.params;
      const { image, name, description } = req.body;
      const skill = await Skill.findById(skillId);

      if (skill) {
        const result = await skillService.update(
          skillId,
          image,
          name,
          description
        );

        result
          ? res.status(200).json({ message: "Updated Successfully" })
          : res.status(200).json({ message: "Update Failed" });
      } else {
        return res.status(200).json({ message: "Skill not found" });
      }
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { skillId } = req.params;
      const { userId } = req.user;
      const skill = await Skill.findById(skillId);

      if (skill) {
        const result = await skillService.delete(skillId, userId);
        result
          ? res.status(200).json({ message: "Deleted Successfully" })
          : res.status(200).json({ message: "Deleted Failed" });
      } else {
        return res.status(200).json({ message: "Skill not found" });
      }
    } catch (error) {
      next(error);
    }
  },
};
