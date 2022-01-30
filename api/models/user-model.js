const { v4: uuidv4 } = require("uuid");

class UserModel {
  constructor(name, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = UserModel;
