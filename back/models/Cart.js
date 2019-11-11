const S = require("sequelize");
const db = require("../config/db");

class Cart extends S.Model {}
Cart.init(
  {
    userId: {
      type: S.INTEGER,
      allowNull: false,
    },
    prodId: {
        type: S.INTEGER,
        allowNull: false,
    },
    cantidad: {
        type: S.INTEGER,
        defaultValue: 1
    }
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;