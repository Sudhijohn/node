const axios = require("axios");
const HttpError = require("./../models/http-error");

function getCoordsForAddress(address) {
  return { lat: 40.7484474, lng: -73.9871516 };
}

async function getCoordsForUser(id) {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data = response.data;
  if (!data) {
    throw new HttpError(
      "Could not find location for the specified address",
      422
    );
  }
}

//exports.getCoordsForAddress = getCoordsForAddress;
location = { getCoordsForAddress, getCoordsForUser };
module.exports = location;
