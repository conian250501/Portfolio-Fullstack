import mongoose from "mongoose";

const { Schema } = mongoose;

const linkSchema = new Schema({
  lable: { type: String },
  url: { type: String },
  project: [
    {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
  ],
  contact: {
    type: Schema.Types.ObjectId,
    ref: "Contact",
  },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
