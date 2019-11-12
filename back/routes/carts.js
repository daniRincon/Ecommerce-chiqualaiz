const express = require("express");
const router = express.Router();


const { addCart, updateCart, fetchCart, emptyCart, syncCart} = require("../resolvers/carts");

router.get('/:id', fetchCart);
router.post('/', addCart);
router.patch('/',updateCart);
router.delete('/:id', emptyCart);
router.put('/', syncCart);
module.exports = router;