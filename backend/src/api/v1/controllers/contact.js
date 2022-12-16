import { contactService } from "../services/contactService";

export const contactController = {
  getAll: async (req, res, next) => {
    try {
      const contacts = await contactService.getAll();
      contacts
        ? res
            .status(200)
            .json({ data: contacts, message: "Successfully get all contact" })
        : res.status(200).json({ message: "Get contacts failed" });
    } catch (error) {
      next(error);
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const contact = await contactService.getDetail(contactId);
      contact
        ? res
            .status(200)
            .json({ data: contact, message: "Successfully get contact" })
        : res.status(200).json({ message: "Contact not found" });
    } catch (error) {
      next(error);
    }
  },
  create: async (req, res, next) => {
    try {
      const { name, url } = req.body;
      const { userId } = req.user;
      const newContact = await contactService.create(name, url, userId);

      newContact
        ? res
            .status(200)
            .json({ data: newContact, message: "Successfully created" })
        : res.status(200).json({ message: "Create failed" });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { name, url } = req.body;
      const result = await contactService.update(contactId, name, url);

      result
        ? res.status(200).json({ message: "Updated Successfully" })
        : res.status(200).json({ message: "Updated Failed" });
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { contactId } = req.params;
      const { userId } = req.user;

      const result = await contactService.delete(contactId, userId);
      result
        ? res.status(200).json({ message: "Deleted Successfully" })
        : res.status(200).json({ message: "Delete Failed" });
    } catch (error) {
      next(error);
    }
  },
};
