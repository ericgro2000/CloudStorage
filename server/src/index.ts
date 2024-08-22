import express from "express";
import mongoose from "mongoose";
import router from "./routes/auth.router";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: path.join(__dirname, "..", ".env") });

const DB = process.env.DB as string;
const port = process.env.PORT || 7000;

const app = express();

app.use(cors());
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
