const express = require("express");
const app = express();
const userRoute = require("./Controller/user");

app.use("/register", register);
