const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User");
const Cart = require("./Cart")
const Kart = require("./Kart");
const KartBook = require("./KartBook");

Book.belongsTo(Author);
Kart.belongsTo(User);
Kart.belongsToMany(Book, { through: "KartBook" });




Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" })
Genre.belongsToMany(Book, { through: "BookGenre" })

module.exports = { Author, Genre, Book, User, Kart, KartBook };
