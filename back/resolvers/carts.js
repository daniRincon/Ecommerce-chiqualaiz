const { Cart, Book } = require("../models/");
const S = require("sequelize");
const Op = S.Op;

const addCart = function(req, res) {
  Cart.create({
    userId: req.body.userId,
    prodId: req.body.bookId
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.status(404).send(err));
};

const updateCart = function(req, res) {
  switch (req.body.operacion) {
    case "sumar":
      Cart.update(
        {
          cantidad: S.literal("cantidad + 1")
        },
        {
          where: {
            userId: req.body.userId,
            prodId: req.body.bookId
          }
        }
      )
        .then(data => res.send(data))
        .catch(err => res.status(404).send(err));
      break;
    case "restar":
      Cart.update(
        {
          cantidad: S.literal("cantidad - 1")
        },
        {
          where: {
            userId: req.body.userId,
            prodId: req.body.bookId
          }
        }
      )
        .then(data => res.send(data))
        .catch(err => res.status(404).send(err));
      break;
    case "eliminar":
      Cart.destroy({
        where: {
          prodId: req.body.bookId,
          userId: req.body.userId
        }
      })
        .then(res.sendStatus(200))
        .catch(err => res.status(404).send(err));
      break;
  }
};

const fetchCart = function(req, res) {
  if (!req.user) {
    res.send({});
  } else {
    Cart.findAll(
      {
        attributes: ["prodId", "cantidad"]
      },
      {
        where: {
          userId: req.params.id
        }
      }
    )
      .then(async data => {
        const prodIds = [],
          prodQuantities = [];
        data.map(book => {
          prodIds.push(book.prodId);
          prodQuantities.push(book.cantidad);
        });
        const bookObj = await Book.findAll({
          where: {
            id: {
              [Op.in]: prodIds
            }
          }
        });
        const dataSent = {};
        bookObj.map((book, index) => {
          dataSent[book.id] = [prodQuantities[index], book.precio, book.titulo];
        });
        res.send(dataSent);
      })
      .catch(err => res.status(404).send(err));
  }
};

const emptyCart = function(req, res) {
  Cart.destroy({
    where: {
      userId: req.user.loggedName.id
    }
  })
    .then(res.sendStatus(200))
    .catch(err => res.status(404).send(err));
};

const syncCart = function(req, res) {
  const ids = Object.keys(req.body);
  const values = Object.values(req.body);
  ids.map(async (id, index) => {
    await Cart.create({
      userId: req.user.id,
      prodId: id,
      cantidad: values[index][0]
    });
  });
  res.sendStatus(200);
};

module.exports = { addCart, updateCart, fetchCart, emptyCart, syncCart };
