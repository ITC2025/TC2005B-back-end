const express = require("express");
const login_controller  = require("../controllers/login-controller");

const router = express.Router();

router.post('/', login_controller.login_post);
router.post('/logout', login_controller.logout_post);

router.get('/', (req, res) => {
	res.send("Login Screen!!!");
});

module.exports = router;
