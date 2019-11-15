const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const S = require("sequelize");

const { Book, Author, Genre, Review } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll({
    where: { visible: true },
    include: {
      model: Genre
    }
  })
    .then(books => res.send(books))
    .catch(err => res.status(404).send(err));
};

const fetchBook = function(req, res) {
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(async book => {
      const author = await book.getAuthor();
      const genresObj = await book.getGenres();
      const reviews = await book.getReviews();
      const genres = genresObj.map(obj => obj.nombre);
      res.send({ ...book.dataValues, author: author.nombre, genres, reviews });
    })
    .catch(err => {
      return res.status(404).send(err);
    });
};

const fetchGenre = function(req, res) {
  Genre.findAll({
    include: [
      {
        model: Book
      }
    ]
  }).then(book => res.send(book));
};

const filteredGenres = function(req, res) {
  Book.findAll({
    include: [
      {
        model: Genre,
        where: {
          id: req.params.id
        }
      }
    ],
    where: {
      visible: true
    }
  })
    .then(data => res.send(data))
    .catch(err => res.status(404).send(err));
};

const addGenre = function(req, res) {
  Genre.findOrCreate({
    where: { nombre: Object.keys(req.body)[0] }
  }).then(genre => res.send(genre));
};

const changeGenre = function(req, res) {
  Genre.update(
    {
      nombre: req.body.newGenre
    },
    {
      where: {
        nombre: req.params.oldGenre
      }
    }
  )
    .then(genre => res.send(genre))
    .catch(err => console.log(err));
};

const deleteGenre = function(req, res) {
  Book.findAll({
    include: [
      {
        model: Genre,

        where: {
          nombre: req.params.genre
        }
      }
    ]
  }).then(books => {
    books.length === 0
      ? Genre.destroy({
          where: {
            nombre: req.params.genre
          }
        })
          .then(genre => res.send("OK"))
          .catch(err => console.log(err))
      : res.send(false);
  });
};

const addBook = function(req, res) {
  Promise.all([
    Book.create({
      titulo: req.body.title,
      precio: req.body.precio,
      url: req.body.imgUrl.length ? req.body.imgUrl : undefined,
      descripcion: req.body.descripcion,
      visible: true,
      stock: 1
    }),
    Author.findOrCreate({ where: { nombre: req.body.author } }),
    ...req.body.categorias.map(async genre => {
      return await Genre.findOrCreate({ where: { nombre: genre } });
    })
  ])
    .then(([newBook, author, ...genres]) => {
      let genreInstances = genres.map(genre => genre[0]);
      newBook.setGenres(genreInstances);
      newBook.setAuthor(author[0]);
      res.send(newBook);
    })
    .catch(err => res.status(404).send(err));
};

const updateBook = function(req, res) {
  Promise.all([
    Book.update(
      {
        titulo: req.body.title,
        precio: req.body.precio,
        url: req.body.imgUrl.length ? req.body.imgUrl : undefined,
        descripcion: req.body.descripcion,
        stock: req.body.stock
      },
      {
        returning: true,
        plain: true,
        where: {
          id: req.body.id
        }
      }
    ),
    Author.findOrCreate({ where: { nombre: req.body.author } }),
    ...req.body.categorias.map(async genre => {
      return await Genre.findOrCreate({ where: { nombre: genre } });
    })
  ])
    .then(([newBook, author, ...genres]) => {
      let genreInstances = genres.map(genre => genre[0]);
      newBook[1].setGenres(genreInstances);
      newBook[1].setAuthor(author[0]);
      res.send(newBook[1]);
    })
    .catch(err => res.status(404).send(err));
};

const deleteBook = function(req, res) {
  Book.update(
    {
      visible: false
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(() => res.sendStatus(204))
    .catch(err => res.status(404).send(err));
};

const updateStock = async function(req, res) {
  const cart = req.body;
  const bookIds = Object.keys(cart);

  //Chequeo para ver si puede comprar

  const checkStock = await bookIds.reduce(async (bool, bookId) => {
    book = await Book.findByPk(bookId);
    return bool ? book.stock >= cart[bookId][0] : false;
  }, true);

  //Update del stock de los libros
  if (checkStock) {
    bookIds.map(async bookId => {
      book = await Book.findByPk(bookId);
      book.update({
        stock: S.literal(`stock - ${cart[bookId][0]}`)
      });
    });
    res.send(true);
  } else {
    res.send(false);
  }
};

const review = function(req, res) {
  Review.create({
    title: req.body.titulo,
    content: req.body.content,
    estrellas: 5,
    autor: req.body.autor
  })
    .then(async review => {
      //Calculo de rating promedio
      const bookId = req.body.id;
      const book = await Book.findByPk(bookId);
      reviews = await book.getReviews();
      const total = reviews.reduce((a, b) => a + b.estrellas, 0) || 0;
      const count = reviews.length || 1;
      const estrellas = Math.ceil(total / count);
      console.log(total, count);
      console.log(estrellas);
      book.update({
        estrellas: estrellas
      });

      let userId = req.user.dataValues ? req.user.dataValues.id : req.user.id;
      review.setUser(userId);
      review.setBook(req.body.id);
    })
    .then(() => res.sendStatus(201))
    .catch(err => {
      res.send(err);
    });
};

module.exports = {
  fetchBooks,
  fetchBook,
  addBook,
  updateBook,
  deleteBook,
  updateStock,
  fetchGenre,
  addGenre,
  filteredGenres,
  changeGenre,
  deleteGenre,
  review
};
