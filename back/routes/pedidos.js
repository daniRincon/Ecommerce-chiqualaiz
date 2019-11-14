const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart");
const Book = require("../models/Book");
const OrderItem = require("../models/OrderItem");
const S = require("sequelize");
const nodemailer = require("nodemailer");

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

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
      return res.sendStatus(404)
    } else {
      console.log('success')
      return res.sendStatus(200);
    }
  });

  // ESTAS MEDIO ACOPLADO AL MAIL Y ES MUY DIFICIL DEBUGGUEAR, ADEMAS DE QUE EL POST
  //TE SIRVE: REPENSA SI QUERES USAR ESTA RUTA
  /* Promise.all([Cart.findAll({ where: { userId: req.user.id } }),
                Pedido.create({ userId: req.user.id })])
   .then(async ([cartArray, pedido]) => {
         await Promise.all(
          cartArray.map(async CartItem => {
            return await OrderItem.create({
              prodId: CartItem.prodId,
              userId: CartItem.userId,
              pedidoId: pedido.id,
              cantidad: CartItem.cantidad
            });
          })
         );
         //Chequeo para ver si puede comprar
         // FEDE, PEDIDO NO ES ITERABLE Y NO TRAE LOS PROD IDS
        let puedoComprar = true;
        pedido.map(async (item) => {
          book = await Book.findByPk(item.prodId);
          if (book.stock >= item.cantidad) {
            puedoComprar = false;
          }
        });

        console.log("Update de stock")
        //Update del stock de los libros
        if (puedoComprar) {
          return pedido.map(async (item) => {
            book = await Book.findByPk(item.prodId);
              return await book.update({
                stock: S.literal(`stock - ${item.cantidad}`)
              });
            }
          );
        } else {
          throw error;
        }
    })   
    .then(()=> res.sendStatus(200))
    .catch(err => {
        console.log(err);
        return res.sendStatus(500);
    });*/
});


 router.get("/historial", function(req, res) {
   Pedido.findAll({
     where: { userId: req.user.id }
   })
   .then( arr => {
     return Promise.all( arr.map(async pedido => {
      let items = await OrderItem.findAll({
        where: { pedidoId: pedido.id }
      });
      return { pedido: pedido.id, items };
    }))
   })
   .then(realHistorial =>{
    return res.status(200).send(realHistorial)
   })
   .catch(err => res.status(404).send(err))
});

module.exports = router;
