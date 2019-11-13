const express = require("express");
const router = express.Router();
const passport = require("../config/passport");
const { User } = require("../models/");

const { isLogedIn } = require("../resolvers/sessions");
  
router.post("/", passport.authenticate("local"), isLogedIn)

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  function(req, res) {
    res.redirect("/");
  }
);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get("/auth/google/callback", passport.authenticate("google"), function(
  req,
  res
) {
  res.redirect("/");
});

router.delete("/", function(req, res) {
  req.logout();
  res.sendStatus(204);
});

router.get("/", isLogedIn);

router.post("/", passport.authenticate("local"), (req, res) => {
  if (req.isAuthenticated()) {
    res.send(req.user);
  } else {
    res.status(401).res.json({});
  }
});

router.post("/validation", (req, res) => {
  console.log("BACK POST", "Id:", req.user.id, "pass", req.body.password);
  User.findByPk(req.user.id).then(user =>
    res.send(user.validPassword(req.body.password))
  );
});

module.exports = router;
