// Router para home:
let express = require("express");

let router = express.Router();

router.get('/', (req, res) => {
 res.send('Schaefer')
})

module.exports = router;
