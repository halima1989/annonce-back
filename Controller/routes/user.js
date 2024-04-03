const express = require("express");
const { register } = require("../userController");
const router = express.Router();

router.route("/register").post(register);
