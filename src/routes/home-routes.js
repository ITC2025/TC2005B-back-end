// Router para home:
const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
 res.send('Schaefer')
})

module.exports = router;
