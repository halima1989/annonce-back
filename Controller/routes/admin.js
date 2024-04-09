const express = require("express");
const { deleteCarsasAdmin } = require("../adminController");

const router = express.Router();

router.route("/admin/:id").delete(deleteCarsasAdmin);

module.exports = router;
