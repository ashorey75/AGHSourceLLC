const express = require("express");

const productsControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/:category", productsControllers.getProductsByCategory );

module.exports = router;

