let express = require("express");
import {Login} from '../controllers/LoginController';

let router = express.Router();

router.post('/', Login);

module.exports = router;