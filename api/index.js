import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import dns from "dns";
dotenv.config();

const app = express();

dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("the connect to DB is succssful😃");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("api/user", userRouter);

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
