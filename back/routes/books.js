const express = require("express");
const router = express.Router();

const { fetchBooks, fetchBook, fetchGenre } = require("../resolvers/books");

router.get("/", fetchBooks);
router.get('/genre', fetchGenre)
router.get("/:id", fetchBook);


module.exports = router;
