const express = require("express");
const { get_role, get_id } = require("../controllers/auth-controller");

const router = express.Router();

router.get('/rol', get_role);
router.get("/id", get_id);

module.exports = router;
