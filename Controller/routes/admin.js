const express = require("express");
const { deleteCarasAdmin } = require("../adminController");

const router = express.Router();

router.route("/admin").post(deleteCarasAdmin);

module.exports = router;
