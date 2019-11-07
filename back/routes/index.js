const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");

router.use("/login", userRouter);
router.use("/books", bookRouter);

module.exports = router;
