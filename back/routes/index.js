const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");
const User = require("../models/User");
const passport = require("../config/passport");

router.use("/users", userRouter);
router.use("/books", bookRouter);

router.post("/register", function(req, res) {
  User.create(req.body)
    .then(user => {
      res.status(201).send(user);
    })
    .catch(err => res.status(404).send(console.error(err)));
});

module.exports = router;
