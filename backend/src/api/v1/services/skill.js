import Skill from "../models/skill";
import Users from "../models/user";

export const skillService = {
  getAll: async () => {
    const skills = await Skill.find({});
    return skills;
  },
  getDetail: async (skillId) => {
    const skill = await Skill.findById(skillId);
    if (skill) return skill;
  },
  create: async (image, name, description, userId) => {
    const newSkill = new Skill({
      image,
      name,
      description,
    });
    const user = await Users.findById(userId);

    user?.skills.push(newSkill._id);
    newSkill.owner = user?._id;

    await user?.save();
    await newSkill.save();
    return newSkill;
  },
  update: async (skillId, image, name, description) => {
    const result = await Skill.findByIdAndUpdate(skillId, {
      image,
      name,
      description,
    });
    if (result) return result;
  },
  delete: async (skillId, userId) => {
    const user = await Users.findById(userId).populate("skills");
    const result = await Skill.findByIdAndRemove(skillId);

    if (user) {
      const skills = user.skills.filter(
        (skill) => skill._id.toString() !== skillId.toString()
      );
      user.skills = skills;
      await user.save();
    }

    if (result) return result;
  },
};
