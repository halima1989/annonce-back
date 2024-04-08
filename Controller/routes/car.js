const express = require("express");
const { displayCars, addCars, deleteCars } = require("../productController");
const router = express.Router();

router.route("/products").post(displayCars);
router.route("/addcar").post(addCars);
router.route("/deletecar/:id").delete(deleteCars);

module.exports = router;
