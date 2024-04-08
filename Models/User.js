class User {
  constructor(id, name, email, password, isActive, gdpr, role) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isActive = isActive;
    this.gdpr = gdpr;
    this.role = role;
  }
}

module.exports = { User };
