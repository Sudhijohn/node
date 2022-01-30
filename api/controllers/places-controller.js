const { validationResult } = require("express-validator");

const DUMMY_PLACES = require("./../dummy/dummy-places");
const PlaceModel = require("../models/place-model");
const {
  commonErrorHandler,
  getErrorMessage,
} = require("./../services/errorHandling");

const location = require("./../util/location");
const Place = require("./../models/place");

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((place) => placeId === place.id);
  if (!place) {
    return next(
      commonErrorHandler("Could not find the place with the ID", 404)
    );
  }
  res.json({ place });
};

const getPlacesByUserId = (req, res, next) => {
  console.log(req.params);
  const uid = req.params.uid;
  const places = DUMMY_PLACES.filter((place) => place.creator === uid);
  if (places.length === 0) {
    return next(
      commonErrorHandler("Could not find the places for this user id!", 404)
    );
  }
  res.json({ places });
};

const createPlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = getErrorMessage(errors);
    return next(commonErrorHandler(errorMessage, 422));
  }
  //getCoordsForUser();
  const {
    title,
    description,
    coordinates: location,
    address,
    creator,
    image,
  } = req.body;
  let result;
  // const createdNewPlace = new PlaceModel(
  //   title,
  //   description,
  //   coordinates,
  //   address,
  //   creator
  // );
  console.log(title);
  const createdNewPlace = new Place({
    title,
    description,
    address,
    location,
    creator,
    image,
  });
  // DUMMY_PLACES.unshift(createdNewPlace);
  try {
    console.log(createdNewPlace);
    result = await createdNewPlace.save();
  } catch (error) {
    console.log(error);
    return next(commonErrorHandler("Could not create the place", 500));
  }

  res.status(201).json({ place: result });
};

const updatePlace = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessage = getErrorMessage(errors);
    return next(commonErrorHandler(errorMessage, 422));
  }
  const { title, description } = req.body;
  const placeId = req.params.pid;
  const updatedPlace = {
    ...DUMMY_PLACES.find((place) => placeId === place.id),
  };
  const placeIndex = DUMMY_PLACES.findIndex((place) => placeId === place.id);
  if (placeIndex === -1) {
    return next(
      commonErrorHandler("Could not find the place with the ID", 404)
    );
  }
  updatedPlace.title = title || updatedPlace.title;
  updatedPlace.description = description || updatedPlace.description;

  DUMMY_PLACES[placeIndex] = updatedPlace;

  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  const placeIndex = DUMMY_PLACES.findIndex((place) => placeId === place.id);
  if (placeIndex === -1) {
    return next(
      commonErrorHandler("Could not find the place with the ID", 404)
    );
  }
  DUMMY_PLACES.splice(placeIndex, 1);

  res.status(200).json({ status: "success" });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;
