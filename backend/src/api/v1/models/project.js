import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },

    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
    },
    technologicals: {
      type: Array,
    },
    links: {
      type: Array,
      default: [],
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
