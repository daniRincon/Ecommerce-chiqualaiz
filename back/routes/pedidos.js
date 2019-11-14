const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const OrderItem = require("../models/OrderItem");
const nodemailer = require('nodemailer');
const Sequelize = require("sequelize");
const Cart = require("../models/Cart")

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
  
  let userId = req.user.length ? req.user[0].id : req.user.id

  Pedido.create({ userId: userId })
    .then(pedido => {
      Cart.findAll({ where: { userId: userId} })
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
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            })
          }
        })})
    })
    .then(()=> res.status(200).send({}))
    .catch(err => {
      console.log(err);
      return res.status(404).send(err);
    })
  })

router.get("/historial", function(req, res) {
  let userId = req.user.length ? req.user[0].id : req.user.id
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

module.exports = router;
