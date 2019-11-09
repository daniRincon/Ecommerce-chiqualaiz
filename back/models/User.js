var Sequelize = require("sequelize");
var db = require("../config/db");
const crypto = require("crypto");

class User extends Sequelize.Model {}
User.init(
  {
    name: Sequelize.STRING,
    lastname: Sequelize.STRING,
    username: { type: Sequelize.STRING, unique: true },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      unique: true
    },
    address: Sequelize.TEXT,
    password: {
      type: Sequelize.STRING,
      defaultValue: Math.floor(Math.random() * 1000000).toString(10)
    },
    salt: {
      type: Sequelize.STRING // a salt is random data that is used as an additional input to a one-way function that "hashes" data
    }, 
    permisos: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeCreate", user => {
  user.salt = crypto.randomBytes(20).toString("hex");
  user.password = user.hashPassword(user.password);
});
User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
User.prototype.validPassword = function(password) {
  return this.password === this.hashPassword(password);
};
module.exports = User;
