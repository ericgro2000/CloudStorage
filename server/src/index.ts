import express from "express";
import mongoose from "mongoose";
import router from "./routes/auth.router";
import path from "path";
import dotenv from "dotenv";
// import authRouter from "./authRouter";
// import cors from "cors";

const rootDir = path.resolve(__dirname, "..", "..");
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const DB = process.env.DB as string;
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api/auth", router);

const start = async () => {
  try {
    await mongoose.connect(DB);
    app.listen(port, () => console.log(`server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
