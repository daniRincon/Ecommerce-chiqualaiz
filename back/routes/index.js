const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");
const sessionRouter = require("./sessions");

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/sessions", sessionRouter);

module.exports = router;
