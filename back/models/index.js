const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User");
const Cart = require("./Cart")

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });

module.exports = { Author, Genre, Book, User, Cart };
