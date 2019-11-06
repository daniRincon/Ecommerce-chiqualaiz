const S = require("sequelize");
const db = require("../config/db");

class Author extends S.Model {}
Author.init(
  {
    nombre: {
      type: S.STRING,
      defaultValue: "Anónimo",
      unique: true
    }
  },
  { sequelize: db, modelName: "author" }
);

module.exports = Author;
