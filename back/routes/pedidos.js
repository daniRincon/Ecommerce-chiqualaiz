const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart");
const OrderItem = require("../models/OrderItem");
router.post("/", function(req, res) {
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
        .then(pedido => res.sendStatus(201));
    })
    .catch(err => {
      console.log(err);
      return res.sendStatus(500);
    });
});
router.get("/historial", function(req, res) {
  Pedido.findAll({
    where: { userId: req.user.id }
  })
    .then(arr => {
      return Promise.all(
        arr.map(pedido => {
          return (pedido.id = OrderItem.findAll({
            where: { pedidoId: pedido.id }
          }));
        })
      );
    })
    .then(historial => {
      res.status(200).send(historial);
    });
});

module.exports = router;
