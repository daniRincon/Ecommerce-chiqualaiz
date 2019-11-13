const { OrderItem, Pedido } = require("../models/");
const S = require("sequelize");
const Op = S.Op;

const isLogedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
      Pedido.findAll({where:{userId : req.user.id}})
      .then(async (pedidos) => {
        const idsDePedidos = pedidos.map((pedido) => pedido.id)
        return await OrderItem.findAll({where:{ pedidoId: {[Op.in]: idsDePedidos} }})
      })
      .then((productosComprados) => {
          let comprasIds = productosComprados.map((prd) => prd.prodId)
          let comprasIdsUnicos = new Set(comprasIds);
        req.user.dataValues
        ? res.send({...req.user.dataValues, compras: [...comprasIdsUnicos]})
        : res.send({...req.user, compras: [...comprasIdsUnicos]})
      })
      .catch((err) => res.status(404).send(err))
     
    } else {
      res.send(false);
    }
  }

module.exports={
    isLogedIn
}