const jwt = require("jsonwebtoken");
const db = require("../models");

const secret = "ITC_Besto_Team";

const get_role = (req, res) => {
	const token = req.cookies.jwt;

	if (token) {
		jwt.verify(token, secret, async (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.status(400).json({errors: "Token invalid."});
			} else {
				const user_id = decoded_token.id;
				const user = await db.Empleados.findOne({where : { ID_empleado : user_id }});
				console.log(user.ID_rol);

				res.send({role: user.ID_rol});
			}
		});

	} else {
		res.status(400).json({errors: "Not logged in."});
	}
};

const get_id = (req, res) => {
	const token = req.cookies.jwt;

	if (token) {
		jwt.verify(token, secret, async (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.status(400).json({errors: "Token invalid."});
			} else {
				const user_id = decoded_token.id;
				console.log(user_id);
				res.send({id: user_id});
			}
		});

	} else {
		res.status(400).json({errors: "Not logged in."});
	}
};


module.exports = { get_role, get_id };
