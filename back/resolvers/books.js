const { Book, Author } = require("../models/");

const fetchBooks = function(req, res) {
  Book.findAll({ where:{
    visible:true
  }})
    .then(books => res.send(books))
    .catch(err => res.status(404).send(err));
};

const fetchBook = function(req, res) {
  
  Book.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(async (book) => {
      const author = await book.getAuthor()
      res.json({...book.dataValues, author: author.nombre})}
      )
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

const updateBook = function(req, res){

  Promise.all(
    [Book.update({
    titulo: req.body.title,
    precio: req.body.precio,
    url: req.body.imgUrl.length? req.body.imgUrl : undefined,
    descripcion: req.body.descripcion,
  },{
    returning: true,
    plain: true,
    where : {
      id :req.body.id
    }
  }),
  Author.findOrCreate({ where: { nombre: req.body.author } })])
  .then(([newBook, author]) => {
    newBook[1].setAuthor(author[0])
    res.send(newBook[1])
  })
  .catch(err => res.status(404).send(err))
}

const deleteBook = function(req, res){
  Book.update({
    visible: false
  },{ 
    where: {
      id : req.params.id
    }
  })
  .then(() => res.sendStatus(204))
  .catch(err => res.status(404).send(err))
}

module.exports = { fetchBooks, fetchBook, addBook, updateBook, deleteBook };
