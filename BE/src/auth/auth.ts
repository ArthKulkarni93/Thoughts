import express from "express";
const admin = require('./admin');
const user = require('./user');
const router = express.Router();

router.use('/auth/admin', admin);
router.use('/auth/user', user);

module.exports = router;