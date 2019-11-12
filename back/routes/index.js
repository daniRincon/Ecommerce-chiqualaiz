const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");
const sessionRouter = require("./sessions");
const cartRouter = require("./carts");
const checkoutRouter = require("./pedidos");
const checkOut = require("./checkOut");

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/sessions", sessionRouter);
// router.use('/checkOut', checkOut )

router.use("/carts", cartRouter);
router.use("/checkout", checkoutRouter);
module.exports = router;
