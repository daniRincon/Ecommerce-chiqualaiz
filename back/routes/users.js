const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

const { User } = require("../models/");

router.post("/", function(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => res.status(400).send(console.log(err)));
});

router.get("/permisos", function(req, res) {
  User.findAll()
    .then(users => res.send(users))
    .catch(err => res.status(400).console.log(err));
});

router.delete("/permisos", function(req, res) {
  const arrId = req.body;
  Promise.all(arrId.map(id => User.destroy({ where: { id: id } })))
    .then(() => User.findAll())
    .then(users => res.send(users))
    .catch(err => (res.status(400), console.log(err)));
});

router.put("/permisos", function(req, res) {
  User.findByPk(req.body.data[1])
    .then(user => user.update({ permisos: req.body.data[0] }))
    .then(() => User.findAll().then(users => res.send(users)))
    .catch(err => (res.send(400), console.log(err)));
});






module.exports = router;
