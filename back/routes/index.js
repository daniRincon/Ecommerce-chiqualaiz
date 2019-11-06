const express = require('express');
const router = express.Router();
const userRouter = require('./users');

router.use('/login', userRouter);

module.exports = router;
