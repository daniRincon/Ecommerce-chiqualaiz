const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");
const User = require("./User")

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });

module.exports = { Author, Genre, Book, User };
