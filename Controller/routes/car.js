const express = require("express");
const { displayCars, addCars } = require("../productController");
const router = express.Router();

router.route("/products").post(displayCars);
router.route("/addcar").post(addCars);

module.exports = router;
