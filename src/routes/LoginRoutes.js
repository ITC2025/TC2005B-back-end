let express = require("express");
let notification_controller = require("../controllers/LoginController");
import {Login} from '../controllers/LoginController';

let router = express.Router();

router.post('/', Login);

module.exports = router;
