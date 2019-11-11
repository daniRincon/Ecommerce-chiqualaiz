const S = require("sequelize");
const db = require("../config/db");

class OrderItem extends S.Model {}
OrderItem.init(
  {
    prodId: {
      type: S.INTEGER,
      allowNull: false
    },
    cantidad: {
      type: S.INTEGER,
      defaultValue: 1
    }
  },
  { sequelize: db, modelName: "orderitem" }
);

module.exports = OrderItem;
