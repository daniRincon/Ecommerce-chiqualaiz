const express = require("express");
const router = express.Router();

const { fetchBooks, fetchBook, addBook, updateBook } = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/:id", fetchBook);
router.post('/', addBook)
router.put('/:id',updateBook)
module.exports = router;
