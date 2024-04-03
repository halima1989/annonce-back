const express = require("express");
const app = express();
const userRoute = require("./Controller/routes/user");
const loginRoute = require("./Controller/routes/user");
const { connect } = require("./Services/Connexion");

connect("mongodb://127.0.0.1:27017/", (error) => {
  if (error) {
    console.log("Failed to connect");
    process.exit(-1);
  } else {
    console.log("successfully connected");
  }
});

app.use("/register", userRoute);
app.use("/home", loginRoute);

app.listen(6000);

console.log("Hello, world");
