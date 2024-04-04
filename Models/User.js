class User {
  constructor(name, email, password, gdpr, role) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gdpr = gdpr;
    this.role = role;
  }
}

module.exports = { User };
