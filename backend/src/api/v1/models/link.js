import mongoose from "mongoose";

const { Schema } = mongoose;

const linkSchema = new Schema({
  label: { type: String, required: true },
  linkName: { type: String, required: true },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
});

const Links = mongoose.model("Link", linkSchema);
export default Links;
