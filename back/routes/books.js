const express = require("express");
const router = express.Router();


const { fetchBooks, fetchBook, addBook, updateBook, deleteBook, fetchGenre } = require("../resolvers/books");


router.get("/", fetchBooks);
router.get('/genre', fetchGenre)
router.get("/:id", fetchBook);
router.post('/', addBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook)
module.exports = router;
