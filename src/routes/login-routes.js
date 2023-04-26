const express = require("express");
const login_controller  = require("../controllers/login-controller");

const router = express.Router();

router.post('/', login_controller.login_post);

module.exports = router;
