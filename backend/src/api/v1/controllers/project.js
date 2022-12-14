import { projectService } from "../services/project";
import { userService } from "../services/user";
import { typeProjectService } from "../services/typeProject.js";
import TypeProject from "../models/typesProject";

export const projectController = {
  getAll: async (req, res, next) => {
    try {
      const projects = await projectService.getAll();
      projects
        ? res
            .status(200)
            .json({ data: projects, message: "Successfully get all projects" })
        : res
            .status(200)
            .json({ data: projects, message: "Projects not found" });
    } catch (error) {
      next(error);
    }
  },
  getProject: async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const project = await projectService.getProject(projectId);
      project
        ? res
            .status(200)
            .json({ data: project, message: "Successfully get project" })
        : res.status(200).json({ message: "Project dont found" });
    } catch (error) {
      next(error);
    }
  },
  getProjectByType: async (req, res, next) => {
    try {
      const { name } = req.query;

      const projects = await projectService.getProjectByType(name);
      projects
        ? res.status(200).json({ data: projects, message: "Successfully" })
        : res.status(200).json({ message: "Type not found" });
    } catch (error) {
      next(error);
    }
  },
  createProject: async (req, res, next) => {
    try {
      const { currentUser } = req;
      const user = await userService.findById(currentUser._id);
      const typeProject = await typeProjectService.findByName(req.body.type);

      // CHECK TYPES
      if (typeProject) {
        const project = await projectService.newProject(
          req.body,
          user,
          typeProject
        );

        if (project) {
          return res
            .status(200)
            .json({ data: project, message: "Create project successfully" });
        } else {
          res.status(200).json({ message: "Create project failed" });
        }
      } else {
        res.status(404).json({ message: "Type dont exist" });
      }
    } catch (error) {
      next(error);
    }
  },
  updateProject: async (req, res, next) => {
    try {
      const { type } = req.body;
      const { projectId } = req.params;
      const typeProject = await TypeProject.findOne({ name: type }).populate(
        "projects"
      );
      const project = await projectService.getById(projectId);

      // CHECK TYPE AND PROJECT
      !project && res.status(200).json({ message: "Project dont found" });
      !typeProject && res.status(200).json({ message: "Type dont exist" });

      const result = await projectService.updateProject(req.body, projectId);

      result
        ? res.status(200).json({ message: "Project updated successfully" })
        : res.status(200).json({ message: "Project update failed" });
    } catch (error) {
      next(error);
    }
  },
  deleteProject: async (req, res, next) => {
    try {
      const { projectId } = req.params;
      const result = await projectService.deleteProject(projectId);
      if (result) {
        res.status(200).json({ message: "Project deleted successfully" });
      } else {
        res.status(200).json({ message: "Project delete failed" });
      }
    } catch (error) {
      next(error);
    }
  },
};
