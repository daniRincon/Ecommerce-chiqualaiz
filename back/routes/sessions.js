const express = require("express");
const router = express.Router();
const passport = require('../config/passport')

function isLogedIn(req, res, next) {
    if (req.isAuthenticated()) {
      req.user? (req.user[0]? res.send(req.user[0]): res.send(req.user)) : res.send({})
    } else {
      res.send(false);
    }
  }
  
  router.post("/", passport.authenticate("local"), (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    } else {
      res.status(401).res.json({});
    }
  });

  router.get('/auth/facebook', passport.authenticate('facebook'));

  router.get('/auth/facebook/callback', passport.authenticate('facebook'),function(req, res) {
    res.redirect('/')
  }
);

router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/auth/google/callback', passport.authenticate('google'), function(req, res) {
    res.redirect('/');
  });
  
router.delete('/', function(req, res){
  req.logout();
  res.sendStatus(204)
})

  router.get("/", isLogedIn);

  module.exports = router;