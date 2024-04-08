const { Admin } = require("../Models/Admin");

const deleteCarsasAdmin = async (req, res) => {
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
