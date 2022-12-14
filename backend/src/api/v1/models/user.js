import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    avatar: { type: String, default: "" },
    userName: {
      type: String,
      required: true,
    },
    nickName: { type: String, default: "" },
    phone: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    introduce: { type: String, default: "" },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, default: false },
    projects: [
      {
        type: Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
    Skills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skill",
      },
    ],
    contacts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Contact",
      },
    ],
  },
  { timestamps: true }
);
const Users = mongoose.model("User", userSchema);

export default Users;
