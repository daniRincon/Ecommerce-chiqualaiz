const Author = require("./Author");
const Genre = require("./Genre");
const Book = require("./Book");

Book.belongsTo(Author);
Book.belongsToMany(Genre, { through: "BookGenre" });

module.exports = { Author, Genre, Book };
