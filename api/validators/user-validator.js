const { check } = require("express-validator");

const userValidator = [
  check("name").not().isEmpty(),
  check("email").normalizeEmail().isEmail(),
  check("password").isLength({ min: 6 }),
];

exports.userValidator = userValidator;
