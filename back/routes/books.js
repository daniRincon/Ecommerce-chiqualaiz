const express = require("express");
const router = express.Router();

const {
  fetchBooks,
  fetchBook,
  addBook,
  updateBook,
  deleteBook,
  fetchGenre,
  filterGenre,
  addGenre,
  changeGenre,
  deleteGenre
} = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/genre", fetchGenre);
router.get("/genres", filterGenre);
router.post("/genres", addGenre);
router.patch(`/genres/:oldGenre`, changeGenre);
router.delete(`/genres/:genre`, deleteGenre);

router.get("/:id", fetchBook);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
module.exports = router;
