import mongoose from "mongoose";

const { Schema } = mongoose;

export const typesSchema = new Schema(
  {
    name: {
      type: String,
    },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const TypeProject = mongoose.model("Type", typesSchema);
export default TypeProject;
