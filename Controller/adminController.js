const { ObjectId } = require("mongodb");
const client = require("../Services/Connexion");
const { response, json } = require("express");
const { User } = require("../Models/User");

const deleteCarsasAdmin = async (request, response) => {
  if (!user.role == "admin") {
    response.status(400).json({ msg: "Unauthorized action" });
    return;
  }
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

module.exports = { deleteCarsasAdmin };
