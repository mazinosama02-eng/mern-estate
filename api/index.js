const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRouter");
const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

mongoose
  .connect(process.env.DATABASE_STRING)
  .then(() => {
    console.log("the connect to DB is Successful🥳");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("the server is running on port 3000");
});
