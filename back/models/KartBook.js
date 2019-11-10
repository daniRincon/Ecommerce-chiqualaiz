const S = require("sequelize");
const db = require("../config/db");

class KartBook extends S.Model {}
KartBook.init(
  {
    cantidad: {
      type: S.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db }
);

module.exports = KartBook;
