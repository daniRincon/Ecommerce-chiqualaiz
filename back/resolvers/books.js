const { Book } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll()
    .then(books => res.send(books))
    .catch(err => res.status(404).send(err));
};

const fetchBook = function(req, res) {
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(book => res.send(book))
    .catch(err => res.status(404).send(err));
};

module.exports = { fetchBooks, fetchBook };
