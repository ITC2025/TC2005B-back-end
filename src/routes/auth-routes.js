const express = require("express");
const { get_role } = require("../controllers/auth-controller");

const router = express.Router();

router.get('/', get_role);

module.exports = router;
