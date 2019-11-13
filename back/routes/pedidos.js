const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart");
const OrderItem = require("../models/OrderItem");
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
        .then(pedido => res.sendStatus(201))
        .then(res => transporter.sendMail(mailOptions, (err, data) => {
          if (err) {
            res.json({
              msg: 'fail'
            })
          } else {
            res.json({
              msg: 'success'
            })
          }
        }))
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
