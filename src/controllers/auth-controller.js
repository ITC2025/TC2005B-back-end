const jwt = require("jsonwebtoken");
const db = require("../models");

const secret = "ITC_Besto_Team";

const get_role = (req, res) => {
	const token = req.cookies.jwt;

	if (token) {
		jwt.verify(token, secret, async (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.redirect("/login");
			} else {
				const user_id = decoded_token.id;
				const user = await db.Empleados.findOne({where : { ID_empleado : user_id }});

				res.send({role: user.ID_rol});
			}
		});

	} else {
		res.redirect("/login");
	}
};

module.exports = { get_role };
