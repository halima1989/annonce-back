const { response, json } = require("express");
const { Car } = require("../Models/Car");
const client = require("../Services/Connexion");

const displayCars = async (request, response) => {
  try {
    let apiRequest = client.db("kiho").collection("car").find();
    let cars = await apiRequest.toArray();
    response.status(200).json(cars);
  } catch (error) {
    response.status(500).json({ error });
  }
};

const addCars = async (request, response) => {
  if (
    !request.body.image ||
    !request.body.model ||
    !request.body.brand ||
    !request.body.description ||
    !request.body.price ||
    !request.body.user
  ) {
    response.status(400).send("Missing fields");
    return;
  }
  try {
    let newCar = new Car(
      request.body.image,
      request.body.model,
      request.body.brand,
      request.body.description,
      request.body.price,
      request.body.user
    );
    let resultProduct = await client
      .db("kiho")
      .collection("car")
      .insertOne(newCar);
    response.status(200).json(resultProduct);
  } catch (e) {
    console.log(e);
    response.status(500).json(e);
  }
};

const deleteCars = async (request, response) => {
  try {
    let id = new ObjectId(request.params.id);

    let apiCall = await client
      .db("kiho")
      .collection("car")
      .deleteOne({ _id: id });

    response = await apiCall;
    response.status(200).json(response);
    if (response.deletedCount === 1) {
      response.status(200).json({ msg: "Product successfully deleted" });
    } else {
      response.status(204).json({ msg: "Couldn't find the product" });
    }
  } catch (error) {
    console.log(error);
    response.status(501).json(error);
  }
};

module.exports = { displayCars, addCars, deleteCars };
