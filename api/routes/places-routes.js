const express = require("express");
const {
  placeValidator,
  placeUpdateValidator,
} = require("./../validators/place-validator");

const placesController = require("./../controllers/places-controller");

const router = express.Router();

router.get("/:pid", placesController.getPlaceById);

router.get("/user/:uid", placesController.getPlacesByUserId);

router.post("/", placeValidator, placesController.createPlace);

router.patch("/:pid", placeUpdateValidator, placesController.updatePlace);

router.delete("/:pid", placesController.deletePlace);

module.exports = router;
