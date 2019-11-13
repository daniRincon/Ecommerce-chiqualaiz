const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Book, Author, Genre } = require("../models/");

const fetchBooks = function(req, res) {

    Book.findAll({
     include: {
       model: Genre,
     }
    })
      .then(books => res.send(books))
      .catch(err => res.status(404).send(err));
/**
  Book.findAll({
    where: {
      visible: true
    }
  })
    .then(books => res.send(books))
    .catch(err => res.status(404).send(err));

};
**/
const fetchBook = function(req, res) {
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(async book => {
      const author = await book.getAuthor();
      const genresObj = await book.getGenres();
      const genres = genresObj.map(obj => obj.nombre);
      res.json({ ...book.dataValues, author: author.nombre, genres });
    })
    .catch(err => res.status(404).send(err));
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

const filteredGenres = function (req, res) {
  console.log(req)
  Book.findAll({
    include: [
      {
        model: Genre,
        where: {
          id : req.params.id
        }
      }
    ]
  })
  .then(data => res.send(data))
  .catch(err => res.status(404).send(err));
}

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

module.exports = {
  fetchBooks,
  fetchBook,
  addBook,
  updateBook,
  deleteBook,
  fetchGenre,
   addGenre,
   filteredGenres,
  changeGenre,
  deleteGenre
};
