const S = require("sequelize");
const db = require("../config/db");

class Kart extends S.Model {}
Kart.init(
  {
    cantidad: {
      type: S.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db, modelName: "kart" }
);

module.exports = Kart;
