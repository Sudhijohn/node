const { validationResult } = require("express-validator");

const DUMMY_USERS = require("./../dummy/dummy-users");
const UserModel = require("./../models/user-model");

const {
  commonErrorHandler,
  getErrorMessage,
} = require("./../services/errorHandling");

const getAllUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = getErrorMessage(errors);
    return next(commonErrorHandler(errorMessage, 422));
  }

  const { name, email, password } = req.body;

  const createdUser = new UserModel(name, email, password);
  const user = DUMMY_USERS.find((user) => user.email === email);
  if (!user) {
    return next(commonErrorHandler("User already exists", 422));
  }

  DUMMY_USERS.push(createdUser);
  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const userIndex = DUMMY_USERS.findIndex(
    (user) => user.email === email && user.password === password
  );

  if (userIndex === -1) {
    return next(commonErrorHandler("Credentials are incorrect", 422));
  }

  res.json({ status: true });
};

exports.getAllUsers = getAllUsers;
exports.signup = signup;
exports.login = login;
