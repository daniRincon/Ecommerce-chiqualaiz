const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const { User, Kart } = require("../models/");

router.post("/", function(req, res) {
  Promise.all([
    User.create(req.body),
    Kart.create()
  ])
  .then(([User, Kart]) => (Kart.setUser(User)))
  .then(user => {
    res.status(201).send(user);
  })
    .catch(err => res.status(400).send(console.log(err)));
});

module.exports = router;

