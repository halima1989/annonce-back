const { MongoClient, Db } = require("mongodb");

var client = null;

function connect(url, callback) {
  if (client === null) {
    client = new MongoClient(url);

    client.connect((error) => {
      if (error) {
        client = null;

        callback(error);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
}

function db(name) {
  return new Db(client, name);
}

function closeConnect() {
  if (client) {
    client.close();

    client = null;
  }
}

module.exports = { connect, db, closeConnect };
