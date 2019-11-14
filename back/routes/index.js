const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const bookRouter = require("./books");
const sessionRouter = require("./sessions");
const cartRouter = require("./carts");
const checkoutRouter = require("./pedidos");

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/sessions", sessionRouter);
router.use("/carts", cartRouter);
router.use("/pedidos", checkoutRouter);
module.exports = router;
