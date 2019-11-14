const express = require("express");
const router = express.Router();

const {
  fetchBooks,
  fetchBook,
  addBook,
  updateBook,
  deleteBook,
  updateStock,
  fetchGenre,
  addGenre,
  changeGenre,
  deleteGenre,
  review,
  filteredGenres
} = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/genres", fetchGenre);
router.post("/genres", addGenre);
router.post("/genres/:id", filteredGenres);
router.patch(`/genres/:oldGenre`, changeGenre);
router.delete(`/genres/:genre`, deleteGenre);
router.get("/:id", fetchBook);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);
router.patch("/stock", updateStock);
router.post("/review", review);
module.exports = router;
