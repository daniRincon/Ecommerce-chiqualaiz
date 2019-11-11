const express = require("express");
const router = express.Router();
const { fetchKart } = require("../resolvers/kart");
const { Kart, KartBook } = require("../models/index");

router.post("/", (req, res) => {
  console.log(req.body);
  KartBook.findAll({ where: { kartId: req.body.id - 1 } }).then(books => {
    res.send(books);
  });
});

module.exports = router;
