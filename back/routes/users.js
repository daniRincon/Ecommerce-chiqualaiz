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

router.post("/login",  passport.authenticate('local'), (req, res) => {
  if(req.isAuthenticated()){
    res.json(req.user.dataValues.name)
  }else{
    res.json({})
  }
})

router.get("/", isLogedIn);

module.exports = router;
