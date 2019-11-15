const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart")
const OrderItem = require("../models/OrderItem");
const nodemailer = require("nodemailer");
const Sequelize = require("sequelize");
const Book = require("../models/Book");
const User = require('../models/User')

router.post("/", function(req, res) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "chequalaizt@gmail.com",
      pass: "zapallo.1"
    }
  });

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log("All works fine, congratz!");
    }
  });

  let mailOptions = {
    from: "Equipo de Chequalaizt",
    name: req.body.name,
    to: req.body.to,
    subject: "GRACIAS POR TU COMPRA",
    html: req.body.messageHtml
  };

  let userId = req.user.length ? req.user[0].id : req.user.id;

  Pedido.create({ userId: userId })
    .then(pedido => {
      Cart.findAll({ where: { userId: userId } })
        .then(cartArray => {
          return Promise.all(
            cartArray.map(CartItem => {
              return OrderItem.create({
                prodId: CartItem.prodId,
                userId: CartItem.userId,
                pedidoId: pedido.id,
                cantidad: CartItem.cantidad
              });
            })
          );
        })
        .then(res => {
          transporter.sendMail(mailOptions, (err, data) => {
            if (err) {
              res.send({
                msg: "fail"
              });
            } else {
              res.send({
                msg: "success"
              });
            }
          });
        });
    })
    .then(() => res.status(200).send({}))
    .catch(err => {
      console.log(err);
      return res.status(404).send(err);
    });
});

router.get("/historial", function(req, res) {
  let userId = req.user.length ? req.user[0].id : req.user.id;
  Pedido.findAll({
    where: { userId: userId }
  })
    .then(arr => {
      return Promise.all(
        arr.map(async pedido => {
          let items = await OrderItem.findAll({
            where: { pedidoId: pedido.id }
          });
          return { pedido: pedido.id, items };
        })
      );
    })
    .then(realHistorial => {
      return res.status(200).send(realHistorial);
    })
    .catch(err => res.status(404).send(err));
});

router.get("/:id", function(req, res) {
  Pedido.findByPk(req.params.id).then(pedido => {
    return OrderItem.findAll({ where: { pedidoId: pedido.id } })
      .then(async items => {
        return Promise.all(
          items.map(async item => {
            let book = await Book.findByPk(item.prodId);
            return { book: book, cantidad: item.cantidad };
          })
        );
      })
      .then(books => {
        res.status(200).send({ pedido: pedido, items: books });
      });
  });
});


router.get("/adminOrders", function(req, res) {
  Pedido.findAll({
    include: [
      {
        model: User
      }
    ]
  }).then(arr => {
    let historial = arr.map(async pedido => {
      let items = await OrderItem.findAll({
        where: { pedidoId: pedido.id }
      });
      return {
        id: pedido.user.id,
        name: pedido.user.name,
        lastname: pedido.user.lastname,
        pedido: pedido.id,
        items: items,
        orderStatus: pedido.orderStatus
      };
    });
    Promise.all(historial).then(realHistorial => {
      res.status(200).send(realHistorial);
    });
  });
});

router.put("/adminOrders", function(req, res) {
  Pedido.update({ orderStatus: req.body[0] },
    {where: {
      id: req.body[1],
      userId: req.body[2]
    }}
    )
    .then((data)=> res.send(req.body[0]))
    .catch(err => (res.status(400), console.log(err)));
});

module.exports = router;
