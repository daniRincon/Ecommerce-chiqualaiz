const { Book , Genre} = require("../models/");

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
    .then(book => res.json(book))
    .catch(err => res.status(404).send(err));
};

const fetchGenre = function(req,res) {
  Genre.findAll()
  .then(data=> res.send(data))
  .catch(err => res.status(404).send(err));
}

module.exports = { fetchBooks, fetchBook, fetchGenre };
