const { Book, Author } = require("../models/");

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

const addBook = function(req, res){
  Promise.all(
    [Book.create({
    titulo: req.body.title,
    precio: req.body.precio,
    url: req.body.imgUrl.length? req.body.imgUrl : undefined,
    descripcion: req.body.descripcion,
    visible: true,
    stock: 1
  }),
  Author.findOrCreate({ where: { nombre: req.body.author } })])
  .then(([newBook, author]) => {
    newBook.setAuthor(author[0])
    res.send(newBook)
  })
  .catch(err => res.status(404).send(err))
}

module.exports = { fetchBooks, fetchBook, addBook };
