import mongoose from "mongoose";
import { mongoConfig } from "../../configs/dbConfig";
export const connectMongoDB = mongoose.connect(
  `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@portfoliocluster.4p6mic1.mongodb.net/portfolio`
);
