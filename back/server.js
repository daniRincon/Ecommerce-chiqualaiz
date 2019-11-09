const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const indexRouter = require("./routes/index");
const cookieParser = require('cookie-parser')
const session = require("express-session");
const passport = require("../back/config/passport");
const db = require("./config/db");

const { Author, Genre, Book } = require("./models"); //NO BORRAR: Necesario para generar las relaciones y tablas al correr por primera vez

require("dotenv").config();

const app = express();

//Allow CORS
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

//.env
const PORT = process.env.PORT || 3000;

//Static files
app.use(express.static("public"));

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Morgan logger
app.use(morgan("dev"));
app.use(cookieParser());

//Passport
app.use(cookieParser());
app.use(
  session({
    secret: "chiqualaiz",
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Router
app.use("/", indexRouter);

db.sync()
  .then(function() {
    app.listen(PORT, function() {
      console.log("Chiqualize listening on " + PORT);
    });
  })
  .catch(err => console.error(err));

module.exports = app;
