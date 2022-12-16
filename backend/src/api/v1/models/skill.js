import mongoose from "mongoose";

const { Schema } = mongoose;

const skillSchema = new Schema({
  image: { type: String },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
