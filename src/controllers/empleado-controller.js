// Controller para empleados:
	
// 	- empleado_crear
// 	- empleado_borrar
// 	- empleado_index
let db = require('../models')

module.exports.empleado_index = (req, res) => {
	db.Empleados.findAll()
		.then((result) => {
			console.log(result);
			res.send(result);
		});
};

module.exports.empleado_crear =  (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.writeHead(400, {"Content-Type": "application/json"});
		res.end(JSON.stringify({
			status: "error",
			message: "empty body"
		}));

		return;
	};

	for (let key in req.body) {
		if (req.body[key] == null || req.body[key] == '') {
			res.writeHead(400, {"Content-Type": "application/json"});
			res.end(JSON.stringify({
				status: "error",
				message: `null key ${key}`
			}));
			return;
		}
	}

	let user = { 
		ID_rol: req.body.ID_rol,
		ID_oficina: req.body.ID_oficina,
		name: req.body.name,
		apellido: req.body.apellido,
		telefono: req.body.telefono,
		correoElectronico: req.body.correoElectronico,
		password: req.body.password
	};

	db.Empleados.create(user)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "User successfully created",
				payload: data,
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating user. " + err.message,
				payload: null,
			});
		});
};
