const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", function(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => res.status(400).send(console.log(err)));
});

router.get('/', function(req, res){
  req.user? (req.user[0]? res.send(req.user[0]): res.send(req.user)) : res.send({})
})


module.exports = router;
