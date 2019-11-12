const express = require("express");
const router = express.Router();
const Pedido = require("../models/Pedido");
const Cart = require("../models/Cart");
const OrdenItem = require("../models/OrderItem");
router.post("/", function(req, res) {
  Pedido.create({ userId: req.user.id })
    .then(pedido => {
      Cart.findAll({ where: { userId: req.user.id } })
        .then(cartArray => {
          return Promise.all(
            cartArray.map(CartItem => {
              return OrdenItem.create({
                prodId: CartItem.prodId,
                userId: CartItem.userId,
                pedidoId: pedido.id,
                cantidad: CartItem.cantidad
              });
            })
          );
        })
        .then(pedido => console.log("pedido aquiii", pedido));
    })
    .catch(err => console.log(err));
});

module.exports = router;
