const express = require("express");
const router = express.Router();

const fetchBooks = require("../resolvers/books");

router.get("/", fetchBooks);

module.exports = router;
