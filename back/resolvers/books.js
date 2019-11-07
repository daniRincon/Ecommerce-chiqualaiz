const { Book } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll().then(books => (console.log(books), res.send(books)));
};

module.exports = fetchBooks;
