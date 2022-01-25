const DUMMY_USERS = require("./../dummy/dummy-users");
const HttpError = require("./../models/http-error");

const getAllUsers = (req, res, next) => {
  res.json(DUMMY_USERS);
};

exports.getAllUsers = getAllUsers;
