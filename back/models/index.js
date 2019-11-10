const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User");
const Kart = require("./Kart");
const KartBook = require("./KartBook");

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });
Kart.belongsTo(User);
Kart.belongsToMany(Book, { through: "KartBook" });

module.exports = { Author, Genre, Book, User, Kart, KartBook };
