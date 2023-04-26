const express = require("express");
const { Login } = require("../controllers/LoginController");

const router = express.Router();

router.post('/', Login);

module.exports = router;
