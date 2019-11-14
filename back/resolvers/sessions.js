const { OrderItem, Pedido, User } = require("../models/");
const S = require("sequelize");
const Op = S.Op;

const isLogedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
      let user = req.user.length? req.user[0] : req.user;
      user = user.dataValues? user.dataValues : user;

      Pedido.findAll({where:{userId : user.id}})
      .then(async (pedidos) => {
        const idsDePedidos = pedidos.map((pedido) => pedido.id)
        return await OrderItem.findAll({where:{ pedidoId: {[Op.in]: idsDePedidos} }})
      })
      .then(async (productosComprados) => {
          let comprasIds = productosComprados.map((prd) => prd.prodId)
          let comprasIdsUnicos = new Set(comprasIds);
          let userInstance = await User.findByPk(user.id);
          let userReviews = await userInstance.getReviews();
          let reviews = userReviews.map((review) => review.id)

          res.send({...user, compras: [...comprasIdsUnicos], reviews})
      })
      .catch((err) => {
        console.error(err)
        res.status(404).send(err)})
     
    } else {
      res.send(false);
    }
  }

module.exports={
    isLogedIn
}