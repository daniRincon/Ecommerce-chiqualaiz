const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User")
const Kart = require('./Kart')

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });
Kart.belongsToMany(Book, { through: 'BookKart' });
Kart.belongsTo(User)

module.exports = { Author, Genre, Book, User, Kart };
