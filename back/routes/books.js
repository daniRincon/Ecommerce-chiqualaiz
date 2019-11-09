const express = require("express");
const router = express.Router();

const { fetchBooks, fetchBook, addBook } = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/:id", fetchBook);
router.post('/', addBook)


module.exports = router;
