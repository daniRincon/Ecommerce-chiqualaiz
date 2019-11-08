const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

function isLogedIn(req, res, next) {
  if (req.isAuthenticated()) {
    res.send(req.user.email);
  } else {
    res.send(false);
  }
}

router.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {
    res.status(401).res.json({});
  }
});

router.get("/", isLogedIn);

module.exports = router;
