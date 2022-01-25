const DUMMY_PLACES = require("./../dummy/dummy-places");
const HttpError = require("./../models/http-error");

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  console.log(req.params.pid);
  const place = DUMMY_PLACES.find((place) => placeId === place.id);
  if (!place) {
    const error = new HttpError("Could not find the user with the ID", 404);
    throw error;
  }
  res.json(place);
};

const getPlaceByUserId = (req, res, next) => {
  console.log(req.params);
  const uid = req.params.uid;
  const user = DUMMY_PLACES.find((user) => user.creator === uid);
  if (!user) {
    const error = new HttpError("Could not find the user with the ID!", 404);
    throw error;
  }
  res.json(user);
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
