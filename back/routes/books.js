const express = require("express");
const router = express.Router();

const { fetchBooks, fetchBook } = require("../resolvers/books");

router.get("/", fetchBooks);
router.get("/:id", fetchBook);



module.exports = router;
