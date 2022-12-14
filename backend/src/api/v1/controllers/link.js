import { linkService } from "../services/link";

export const linkController = {
  createLink: async (req, res, next) => {
    try {
      const { lable, url } = req.body;
      const link = await linkService.create(lable, url);
      link
        ? res.status(200).json({
            data: link,
            message: "Successfully created",
          })
        : res.status(200).json({ message: "Create failed" });
    } catch (error) {
      next(error);
    }
  },
  updateLink: async (req, res, next) => {
    try {
      const { linkId } = req.params;
      const link = await linkService.findById(linkId);
      if (link) {
        await linkService.update(link, req.body);
        res.status(200).json({ message: "Updated Successfully" });
      } else {
        res.status(404).json({ message: "Link not found" });
      }
    } catch (error) {
      next(error);
    }
  },
  deleteLink: async (req, res, next) => {
    try {
      const { linkId } = req.params;
      await linkService.delete(linkId);
      res.status(200).json({ message: "Successfully Deleted" });
    } catch (error) {
      next(error);
    }
  },
};
