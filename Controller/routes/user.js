const express = require("express");
const { register } = require("../userController");
const router = express.Router();
const { login } = require("../userController");

router.route("/register").post(register);
router.route("home").post(login);

module.exports = router;
