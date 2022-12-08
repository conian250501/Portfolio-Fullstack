import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import { apiRouter } from "./api/v1/routers/apiRouter";
import { connectMongoDB } from "./api/v1/models/connectDB/connectMongo";

dotenv.config();

// CONNECT DATABASE
connectMongoDB
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SET ROUTER
app.use("/api/v1", apiRouter);

// Cath error 404
app.use((req, res, next) => {
  const error = new Error("Not found");
  next(error);
});

// Error handle Function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = error.status || 500;
  res.status(status).json({
    message: error.message,
  });
});

app.listen(port, () => {
  console.log(`Server running on : http://localhost:${port}`);
});
