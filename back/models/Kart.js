const S = require("sequelize");
const db = require("../config/db");

class Kart extends S.Model {}
Kart.init(
  {
    
  },
  { sequelize: db, modelName: "kart" }
);

module.exports = Kart;