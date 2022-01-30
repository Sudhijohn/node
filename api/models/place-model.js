const { v4: uuidv4 } = require("uuid");
const location = require("./../util/location");

class PlaceModel {
  constructor(title, description, coordinates, address, creator) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.location = coordinates || location.getCoordsForAddress();
    this.address = address;
    this.creator = creator;
  }
}

module.exports = PlaceModel;
