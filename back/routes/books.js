const express = require("express");
const router = express.Router();

const { fetchBooks } = require("../resolvers");

router.get("/books", fetchBooks());

module.exports = router;
