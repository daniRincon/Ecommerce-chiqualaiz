const { Book, Kart, KartBook } = require("../models/");
const sequelize = require("sequelize");

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

const fetchToKart = function(req, res) {
  Promise.all([
    Book.findAll({ where: { id: req.params.id } }),
    Kart.findAll({ where: { userId: req.body.id } })
  ])
    .then(([book, kart]) => kart[0].addBook(book[0]))
    .then(data => res.send(data))
    .catch(console.log);
};

const addToKart = function(req, res) {
  Promise.all([
    Book.findAll({ where: { id: req.params.id } }),
    Kart.findAll({ where: { userId: req.body.id } })
  ])
    .then(([book, kart]) =>
      KartBook.increment("cantidad", {
        where: { kartId: kart[0].id, bookId: book[0].id }
      })
    )
    .then(kartbook => console.log(kartbook))
    .catch(console.log);
};

module.exports = { fetchBooks, fetchBook, fetchToKart, addToKart };
