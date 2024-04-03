const { User } = require("../Models/User");

const register = async (request, response) => {
  try {
    let user = new User(
      null,
      request.body.name,
      request.body.email,
      request.body.password,
      new Date()
    );

    let result = await client.db().collection("user").insertOne(user);
    response.status(200).json(result);
  } catch (e) {
    console.log(e);
    response.status(500).json({ error: e });
  }
};

module.exports = { register };
