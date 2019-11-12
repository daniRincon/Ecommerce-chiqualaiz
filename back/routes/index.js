const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");
const sessionRouter = require("./sessions");
const checkOut = require("./checkOut");

const cartRouter = require("./carts");

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/sessions", sessionRouter);
// router.use('/checkOut', checkOut )

router.use("/carts", cartRouter);

module.exports = router;
