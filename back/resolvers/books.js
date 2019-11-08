const { Book } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll().then(books => res.send(books));
};

const fetchBook = function(req, res) {

  console.log(req.params)
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(book => res.send(book))
}

module.exports = { fetchBooks, fetchBook}
