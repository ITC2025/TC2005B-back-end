// Controller for users:
	
// 	- user_create
// 	- user_delete
// 	- user_index
// 	- user_get_by_id
// 	- user_update

let db = require('../models')

module.exports.user_index = (req, res) => {
	db.Empleados.findAll()
		.then((result) => {
			console.log(result);
			res.send(result);
		});
};

module.exports.user_get_by_id = (req, res) => {	
	db.Empleados.findAll({
		where : {
			ID_empleado: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.user_create =  (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.writeHead(400, {"Content-Type": "application/json"});
		res.end(JSON.stringify({
			status: "error",
			message: "empty body"
		}));

		return;
	};

	// Checks that no key has null value
	// for (let key in req.body) {
	// 	if (req.body[key] == null || req.body[key] == '') {
	// 		res.writeHead(400, {"Content-Type": "application/json"});
	// 		res.end(JSON.stringify({
	// 			status: "error",
	// 			message: `null key ${key}`
	// 		}));
	// 		return;
	// 	}
	// }

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
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating user. " + err.message,
				payload: null
			});
		});
};

module.exports.user_update = (req, res) => {
	console.log("HI");
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.writeHead(400, {"Content-Type": "application/json"});
		res.end(JSON.stringify({
			status: "error",
			message: "empty body"
		}));

		return;
	};

	db.Empleados.update(req.body, {
		where: {
			ID_empleado: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "User successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "User could not be updated",
					payload: null
				});
			}
		})
};

module.exports.user_delete = (req, res) => {
	db.Empleados.destroy({
		where: {
			ID_empleado: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "User successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "User could not be deleted",
					payload: null
				});
		}
	});
};