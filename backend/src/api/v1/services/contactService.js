import Contact from "../models/contact";
import Users from "../models/user";

export const contactService = {
  getAll: async () => {
    const contacts = await Contact.find({});
    return contacts;
  },
  getDetail: async (contactId) => {
    const contact = await Contact.findById(contactId);
    if (contact) return contact;
  },
  create: async (name, url, userId) => {
    const newContact = new Contact({
      name,
      url,
    });
    const user = await Users.findById(userId);

    if (user) {
      newContact.owner = user?._id;
      user?.contacts.push(newContact._id);
      await user.save();
      await newContact.save();
      return newContact;
    }
  },
  update: async (contactId, name, url) => {
    const result = await Contact.findByIdAndUpdate(contactId, {
      name,
      url,
    });
    if (result) return result;
  },
  delete: async (contactId, userId) => {
    const user = await Users.findByIdAndUpdate(userId).populate("contacts");
    const result = await Contact.findByIdAndDelete(contactId);

    if (user) {
      const newContacts = await user.contacts.filter(
        (contact) => contact._id.toString() !== contactId.toString()
      );
      user.contacts = newContacts;
      await user.save();
      return result;
    }
  },
};
