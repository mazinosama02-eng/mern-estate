const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
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

app.listen(3000, () => {
  console.log("the server is running on port 300");
});
