import express from "express";
const admin = require('./admin');
const user = require('./user');
const router = express.Router();

router.use('/admin', admin);
router.use('/user', user);

module.exports = router;