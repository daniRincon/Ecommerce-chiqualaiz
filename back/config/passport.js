const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require("../models/User");

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({
      where: {
        username: username
      }
    }).then(function(user) {
      if (!user) {
        return done(null, false, {
          message: "Incorrect username."
        });
      } else if (!user.validPassword(password)) {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, user);
    });
  })
);

passport.use(new FacebookStrategy({
  clientID: "545998876197362",
  clientSecret: "66ca2afda75d526ff3e4b3bb392e4018",
  callbackURL: "http://localhost:3000/sessions/auth/facebook/callback"
},
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({where: {
      username: 'f' + profile.id, 
      name: profile.displayName,
     }})
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err))
  }
))

passport.use(new GoogleStrategy({
  clientID: "871324229312-su9nf4ia7b1c315g2cnqscui8s5rqk7d.apps.googleusercontent.com",
  clientSecret: "jVCUcnjK7AuZSTGK8cr12-_t",
  callbackURL: "http://localhost:3000/sessions/auth/google/callback"
},
function(token, tokenSecret, profile, done) {
  console.log(profile)
    User.findOrCreate({ where: {
      username: 'g' + profile.id,
      name: profile.displayName
    }})
    .then(user => {
      done(null, user);
    })
    .catch(err => done(err))
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

module.exports = passport;
