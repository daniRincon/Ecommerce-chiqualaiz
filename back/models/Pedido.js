const S = require("sequelize");
const db = require("../config/db");

class Pedido extends S.Model {}
Pedido.init(
  {
    orderDate: {
      type: S.DATE,
      defaultValue: S.NOW
    },
    orderStatus: { type: S.STRING, defaultValue: "Created" }
  },
  { sequelize: db, modelName: "pedido" }
);

module.exports = Pedido;
