// Controller for project_user:

// 	- project_user_index
// 	- project_user_get_by_id
// 	- project_user_create
// 	- project_user_delete
// 	- project_user_update

let db = require('../models')

module.exports.project_user_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ProyectosEmpleados.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.project_user_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ProyectosEmpleados.findAll({
		where : {
			ID_proyecto_empleado: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.project_user_create =  (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

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

	let project_user = { 
		ProyectoIDProyecto: req.body.EmpleadoIDEmpleado,
        EmpleadoIDEmpleado: req.body.EmpleadoIDEmpleado
	};

	db.ProyectosEmpleados.create(project_user)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Project user successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating project user. " + err.message,
				payload: null
			});
		});
};


module.exports.project_user_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ProyectosEmpleados.destroy({
		where: {
			ID_proyecto_empleado: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Project user successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Project user could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting project user. " + err.message,
				payload: null
			});
	});
};

module.exports.project_user_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.ProyectosEmpleados.update(req.body, {
		where: {
			ID_proyecto_empleado: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Project user successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Project user could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating project user. " + err.message,
				payload: null
			});
	});
};