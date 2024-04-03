class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.gdpr = gdpr;
    this.role = role;
  }
}

module.exports = { User };
