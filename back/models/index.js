const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User");
const Cart = require("./Cart");
const Pedido = require("./Pedido");
const OrderItem = require("./OrderItem");
const Review = require("./Review");

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });
Genre.belongsToMany(Book, { through: "BookGenre" })
Pedido.belongsTo(User);
OrderItem.belongsTo(Pedido);
Pedido.hasMany(OrderItem);
Review.belongsTo(Book);
Book.hasMany(Review);
Review.belongsTo(User);
User.hasMany(Review);


module.exports = {
  Author,
  Genre,
  Book,
  User,
  Cart,
  Review,
  OrderItem,
  Pedido
};
