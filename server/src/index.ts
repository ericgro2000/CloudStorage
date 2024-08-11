import express from "express";
import mongoose from "mongoose";
import router from "./routes/auth.router";
// import authRouter from "./authRouter";
// import cors from "cors";

const port = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use("/api/auth", router);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://CloudStorageCluster:0123456789@cloudstoragecluster.3wyre.mongodb.net/`
    );
    app.listen(port, () => console.log(`server started on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

start();
