import { typeProjectService } from "../services/typeProject";

export const typeProjectController = {
  getAllType: async (req, res, next) => {
    try {
      const types = await typeProjectService.getAll();
      res
        .status(200)
        .json({ data: types, message: "get all types successfully" });
    } catch (error) {
      next(error);
    }
  },
  createType: async (req, res, next) => {
    try {
      const { name } = req.body;
      const typeProjectExists = await typeProjectService.findByName(name);
      if (typeProjectExists)
        return res.status(200).json({ message: "Type project is exits" });

      const typeProject = await typeProjectService.createType(req.body);
      if (typeProject) {
        res
          .status(200)
          .json({ data: typeProject, message: "Successfully created type" });
      } else {
        res.status(200).json({ data: typeProject, message: "Create failed" });
      }
    } catch (error) {
      next(error);
    }
  },
  updateType: async (req, res, next) => {
    try {
      const { typeId } = req.params;
      const result = await typeProjectService.updateType(typeId, req.body);
      result
        ? res.status(200).json({ message: "Updated Successfully" })
        : res.status(200).json({ message: "Update Failed" });
    } catch (error) {
      next(error);
    }
  },
  deleteType: async (req, res, next) => {
    try {
      const { typeId } = req.params;
      const result = await typeProjectService.deleteType(typeId);
      result
        ? res.status(200).json({ message: "Deleted Successfully" })
        : res.status(200).json({ message: "Deleted Failure" });
    } catch (error) {
      next(error);
    }
  },
};
