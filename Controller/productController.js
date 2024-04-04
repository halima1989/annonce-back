const { response } = require("express");
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
  try {
    let newCar = new Car(
      request.body.name,
      request.body.image,
      request.body.model,
      request.body.brand,
      request.body.description,
      request.body.price
    );
    let result = await client.db("kiho").collection("car").insertOne(Car);
    response.status(200).json(result);
  } catch {
    response.status(500).json({ msg: "Failed to add a new product" });
  }
};

module.exports = { displayCars, addCars };
