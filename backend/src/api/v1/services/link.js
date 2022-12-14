import Link from "../models/link";

export const linkService = {
  findById: async (linkId) => {
    const link = await Link.findById(linkId);
    console.log(link);
    if (link) return link;
  },
  create: async (lable, url) => {
    try {
      const link = new Link({
        lable,
        url,
      });
      await link.save();
      return link;
    } catch (error) {
      return error;
    }
  },
  update: async (link, data) => {
    const { lable, url } = data;
    const result = await Link.findByIdAndUpdate(link._id, {
      lable,
      url,
    });
    if (result) return result;
  },
  delete: async (linkId) => {
    const result = await Link.findByIdAndRemove(linkId);
    return result;
  },
};
