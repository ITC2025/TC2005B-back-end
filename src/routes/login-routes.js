const express = require("express");
const login_controller  = require("../controllers/login-controller");

const router = express.Router();

router.post('/login', login_controller.login_post);
router.post('/logout', login_controller.logout_post);


module.exports = router;
