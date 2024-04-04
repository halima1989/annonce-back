const { User } = require("../Models/User");
const client = require("../Services/Connexion");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    let user = new User(
      request.body.name,
      request.body.email,
      hashedPassword,
      new Date(),
      "user"
    );

    let result = await client.db("kiho").collection("user").insertOne(user);
    response.status(200).json(result);
  } catch (e) {
    console.log(e);
    response.status(500).json({ error: e });
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await client.db("kiho").collection("user").findOne({ email });

    if (!user) {
      return response.status(404).json({ msg: "Invalid username" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
      },
      "secret_key",
      { expiresIn: "1h" }
    );

    response.status(200).json({ token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ msg: "Couldn't connect. Please try again" });
  }
};

module.exports = { register, login };
