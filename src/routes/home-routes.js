// Router para home:
const express = require("express");
const { validate, is_admin } = require("../middleware/auth-middleware");
const router = express.Router();

router.get("/", (req, res) => {
	res.send('Schaefer')
})


// testing routes for authentication
router.get("/employee_secrets", validate, (req, res) => {
	res.send("Welcome to employee secrets!!!");
});

router.get("/admin_secrets", is_admin, (req, res) => {
	res.send("Welcome to admin secrets!!!");
});

module.exports = router;
