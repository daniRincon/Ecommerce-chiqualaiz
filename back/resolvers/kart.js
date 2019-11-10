const { Kart } = require("../models/index");

const fetchKart = (req, res) => {
  console.log("FETCH BACK");
  Kart.findAll({ where: { userId: req.user.id } }).then(kart => res.send(kart));
};

module.exports = { fetchKart };
