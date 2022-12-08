import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    nickName: { type: String },
    phone: { type: String, required: true },
    password: {
      type: String,
      required: true,
    },
    // projects: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Project",
    //   },
    // ],
    // Skills: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Skill",
    //   },
    // ],
    // contacts: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Contact",
    //   },
    // ],
  },
  { timestamps: true }
);
const Users = mongoose.model("users", userSchema);

export default Users;
