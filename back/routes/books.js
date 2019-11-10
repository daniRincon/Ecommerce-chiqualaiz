const express = require("express");
const router = express.Router();

const {
  fetchBooks,
  fetchBook,
  fetchToKart,
  addToKart
} = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/:id", fetchBook);
router.post("/:id", fetchToKart);
router.put("/:id", addToKart);

module.exports = router;
