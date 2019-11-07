const S = require("sequelize");
const db = require("../config/db");

class Genre extends S.Model {}
Genre.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
      unique: true
    }
  },
  { sequelize: db, modelName: "genre" }
);

module.exports = Genre;
