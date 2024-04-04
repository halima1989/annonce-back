const express = require("express");
const app = express();
const userRoute = require("./Controller/routes/user");
// const loginRoute = require("./Controller/routes/user");
const productRoute = require("../annonce-back/Controller/routes/car");
const { connect } = require("./Services/Connexion");
app.use(express.json());

connect("mongodb://127.0.0.1:27017/", (error) => {
  if (error) {
    console.log("Failed to connect");
    process.exit(-1);
  } else {
    console.log("successfully connected");
  }
});

app.use("/", userRoute);
// app.use("/", loginRoute);
app.use("/products", productRoute);

app.listen(6000);

console.log("Hello, world");
