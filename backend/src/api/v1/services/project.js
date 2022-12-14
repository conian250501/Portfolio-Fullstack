import Link from "../models/link";
import Project from "../models/project";
import TypeProject from "../models/typesProject";
import Users from "../models/user";

export const projectService = {
  getAll: async () => {
    const projects = await Project.find({});
    if (projects) return projects;
  },
  getProject: async (projectId) => {
    const project = await Project.findOne({ _id: projectId })
      .populate({ path: "links", select: ["lable", "link"] })
      .populate({ path: "type", select: ["name"] })
      .exec();
    if (project) {
      return project;
    }
  },
  getById: async (projectId) => {
    const project = await Project.findById(projectId);
    if (project) return project;
  },
  getProjectByType: async (name) => {
    const types = await TypeProject.find({ name: name }).populate("projects");
    if (types) {
      const projects = types[0]?.projects;
      if (projects) return projects;
    }
  },
  newProject: async (data, user, typeProject) => {
    const { name, description, image, types, links, technologicals } = data;

    const newProject = new Project({
      image,
      name,
      description,
      technologicals,
      links,
    });

    // SET OWNER PROJECT
    newProject.owner = user._id;
    newProject.type = typeProject._id;
    typeProject.projects.push(newProject._id);
    user.projects.push(newProject._id);

    // SAVE DOCS
    await newProject.save();
    await typeProject.save();
    await user.save();

    return newProject;
  },
  updateProject: async (data, projectId) => {
    const { name, description, image, type, links, technologicals } = data;
    const project = await Project.findById(projectId);
    const typeProject = await TypeProject.findOne({ name: type });

    if (project) {
      project.type = typeProject?._id;
      const projectUpdated = await Project.findByIdAndUpdate(projectId, {
        name,
        description,
        image,
        technologicals,
        links,
      });

      // UPDATE TYPE
      await TypeProject.updateOne(
        { name: type },
        { $addToSet: { projects: projectUpdated } }
      );

      // UPDATE PROJECT
      await projectUpdated?.save();
      await project.save();
      return projectUpdated;
    }
  },
  deleteProject: async (projectId) => {
    const user = await Users.findOne({ project: projectId }).populate(
      "projects"
    );
    const projectUpdated = await Project.findByIdAndRemove(projectId);

    const projects = user.projects.filter(
      (project) => project._id.toString() !== projectId.toString()
    );
    user.projects = projects;

    await user.save();
    if (projectUpdated) return projectUpdated;
  },
};
