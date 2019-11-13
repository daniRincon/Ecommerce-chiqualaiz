const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart");
const Book = require("../models/Book");
const OrderItem = require("../models/OrderItem");
const S = require("sequelize");
const nodemailer = require('nodemailer');
const creds = require('../mail');



router.post("/", function(req, res) { 

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'chequalaizt@gmail.com',
      pass: 'zapallo.1'
   } })
    
   transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('All works fine, congratz!');
    }
  });

   let mailOptions = {
    from: 'Equipo de Chequalaizt',
    name: req.body.name,
    to: req.body.to, 
    subject: 'GRACIAS POR TU COMPRA', 
    html: req.body.messageHtml 
  };

  Pedido.create({ userId: req.user.id })
    .then(pedido => {
      Cart.findAll({ where: { userId: req.user.id } })
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
        .then(pedido => {
          //Chequeo para ver si puede comprar
          let puedoComprar = true;
          pedido.map(async item => {
            book = await Book.findByPk(item.prodId);
            if (book.stock >= item.cantidad) {
              puedoComprar = false;
            }
          });
          //Update del stock de los libros
          if (puedoComprar) {
            pedido.map(async item => {
              book = await Book.findByPk(item.prodId);
              if (book.stock >= item.cantidad) {
                book.update({
                  stock: S.literal(`stock - ${item.cantidad}`)
                });
              }
            });
            res.sendStatus(201);
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
          } else {
            throw error;
          }
        })
    })
    .catch(err => {
      console.log(err);
      return res.sendStatus(500);
    });
});

router.get("/historial", function(req, res) {
  Pedido.findAll({
    where: { userId: req.user.id }
  }).then(arr => {
    let historial = arr.map(async pedido => {
      let items = await OrderItem.findAll({
        where: { pedidoId: pedido.id }
      });
      return { pedido: pedido.id, items: items };
    });
    Promise.all(historial).then(realHistorial =>
      res.status(200).send(realHistorial)
    );
  });
});

module.exports = router;
