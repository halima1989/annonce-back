const { User } = require("./User");

class Admin extends User {
  constructor(id, name, email, password, isActive, gdpr, role) {
    super(id, name, email, password, isActive, gdpr);
    this.role = "admin";
  }
}

module.exports = { Admin };
