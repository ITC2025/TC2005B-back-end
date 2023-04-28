const jwt = require("jsonwebtoken");
const db = require("../models");

const secret = "ITC_Besto_Team";


// Esta funcion valida el token, entonces para cualquier ruta
// se puede agregar antes de la funcion normal si es necesario
// que el usuario este iniciado sesion para verla, por ejemplo, 
//
// app.get("/secrets", validate, secrets_contoller.function);
//
// asi cuando se vaya a la ruta /secrets primero se validara el usuario 
// si si esta iniciado sesion simplemente se pasara a la siguiente funcion
// del controlador.
//
const validate = (req, res, next) => {
	const token = req.cookies.jwt;
	console.log(token);

	if (token) {
		jwt.verify(token, secret, (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.redirect("/login");
			} else {
				console.log(decoded_token);
				next();
			}
		});

	} else {
		res.redirect("/login");
	}
};


// Esta funcion es similar a la anterior, checa si el usuario
// esta iniciado sesion y es admin, si no es admin ahorita se redirige
// a home, esto deberian cambiarlo...
const is_admin = (req, res, next) => {
	const token = req.cookies.jwt;

	if (token) {
		jwt.verify(token, secret, async (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.status(400).json({errors: "Token invalid."});
			} else {
				const user_id = decoded_token.id;
				const user = await db.Empleados.findOne({where : { ID_empleado : user_id }});

				if (user && user.ID_rol === 3) {
					next();
				} else {
					res.status(400).json({errors: "Token invalid."});
				};
			}
		});

	} else {
		res.status(400).json({errors: "Token invalid."});
	}

};

module.exports = { validate, is_admin };
