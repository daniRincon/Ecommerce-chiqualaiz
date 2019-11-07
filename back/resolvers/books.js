const { Book } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll().then(books => (console.log(books), res.send(books)));
};

const fetchBook = function(req, res) {
  console.log(req.params)
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(book => false)
}

module.exports = { fetchBooks, fetchBook}
