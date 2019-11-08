const { Book } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll().then(books => res.send(books));
};

const fetchBook = function(req, res) {
  Book.findByPk(req.params.id).then(book => res.send(book));
};

module.exports = { fetchBooks, fetchBook };
