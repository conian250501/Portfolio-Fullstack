import TypeProject from "../models/typesProject";
import Project from "../models/project";

export const typeProjectService = {
  getAll: async () => {
    const types = await TypeProject.find({});
    return types;
  },
  findByName: async (name) => {
    const typeProject = await TypeProject.findOne({ name });
    if (typeProject) return typeProject;
  },
  createType: async (data) => {
    try {
      const newType = new TypeProject(data);
      await newType.save();
      return newType;
    } catch (error) {
      return error;
    }
  },
  updateType: async (typeId, data) => {
    const { name } = data;
    const result = await TypeProject.findByIdAndUpdate(
      { _id: typeId },
      {
        name,
      }
    );
    if (result) return result;
  },
  deleteType: async (typeId) => {
    const projects = await Project.find({ type: typeId }).populate("type");
    const result = await TypeProject.findByIdAndRemove({ _id: typeId });
    projects.map(async (project) => {
      const currentProject = await Project.findOne(project._id);
      if (currentProject) {
        currentProject.type = null;
        await currentProject?.save();
      }
    });

    if (result) return result;
  },
};
