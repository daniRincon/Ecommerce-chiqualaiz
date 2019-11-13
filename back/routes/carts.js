const express = require("express");
const router = express.Router();


const { addCart, updateCart, fetchCart, emptyCart, syncCart} = require("../resolvers/carts");

router.get('/:id', fetchCart);
router.post('/', addCart);
router.patch('/',updateCart);
router.delete('/', emptyCart);
router.put('/', syncCart);
module.exports = router;