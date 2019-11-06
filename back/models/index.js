const Book = require("./Book");
const Genre = require("./Genre");
const Author = require("./Author");

Book.belongsToMany(Genre, { through: "BookGenre" });
Book.belongsTo(Author);
Genre.belongsToMany(Book, { through: "BookGenre" });

module.exports = { Book, Genre, Author };
