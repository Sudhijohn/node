const express = require("express");
const userController = require("./../controllers/users-controller");
const { userValidator } = require("./../validators/user-validator");

const router = express.Router();

router.get("/", userController.getAllUsers);

router.post("/signup", userValidator, userController.signup);

router.post("/login", userController.login);

module.exports = router;
