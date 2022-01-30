const { check } = require("express-validator");

const placeValidator = [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
  check("address").not().isEmpty(),
];

const placeUpdateValidator = [
  check("title").not().isEmpty(),
  check("description").isLength({ min: 5 }),
];

exports.placeValidator = placeValidator;
exports.placeUpdateValidator = placeUpdateValidator;
