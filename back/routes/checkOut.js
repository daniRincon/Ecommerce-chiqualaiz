const express = require("express");
const router = express.Router();


const { checkOut } = require("../resolvers/books");

router.post("/", checkOut);

module.exports = router;
