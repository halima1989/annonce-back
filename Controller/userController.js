const { User } = require("../Models/User");
const client = require("../Services/Connexion");

const register = async (request, response) => {
  try {
    let user = new User(
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

const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await client
      .db("express-api")
      .collection("user")
      .findOne({ email });

    if (!user) {
      return response.status(404).json({ msg: "Utilisateur non trouvé" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return response.status(401).json({ msg: "Mot de passe incorrect" });
    }

    const token = jwt.sign(
      {
        userId: user._id, // ID de l'utilisateur dans la base de données
        email: user.email,
      },
      "secret_key",
      { expiresIn: "1h" }
    );

    response.status(200).json({ token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ msg: "Erreur lors de la connexion" });
  }
};

module.exports = { register, login };
