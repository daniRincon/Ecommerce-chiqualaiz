const S = require("sequelize");
const db = require("../config/db");

class Book extends S.Model {}
Book.init(
  {
    titulo: {
      type: S.STRING,
      allowNull: false
    },
    precio: {
      type: S.DECIMAL(10, 2),
      allowNull: false
    },
    url: {
      type: S.STRING,
      defaultValue:
        "https://images.assetsdelivery.com/compings_v2/mousemd/mousemd1404/mousemd140400053.jpg"
    },
    descripcion: S.TEXT,
    estrellas: S.INTEGER,
    visible: {
      type: S.BOOLEAN,
      allowNull: false
    },
    stock: S.INTEGER
  },
  { sequelize: db, modelName: "book" }
);

module.exports = Book;
