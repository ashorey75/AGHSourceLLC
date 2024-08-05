const express = require("express");
const { check } = require("express-validator");

const placesControllers = require("../controllers/places-controllers");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");
const productsControllers = require("../controllers/products-controllers");

const router = express.Router();

router.get("/products", productsControllers.getProductsByCategory );
router.get("/:pid", placesControllers.getPlaceById);

//router.get("borough")
router.get("/boroughs/:boro", placesControllers.getPlacesByBoro);
//router.get("borough/:boro/:pid")

router.get("/user/:uid", placesControllers.getPlacesByUserId);



router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
);

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
