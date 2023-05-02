// Controller for projects:
	
// 	- project_index
// 	- project_get_by_id
// 	- project_create
// 	- project_delete
// 	- project_update

const jwt = require("jsonwebtoken");
const db = require('../models')

module.exports.project_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Proyectos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.project_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Proyectos.findAll({
		where : {
			ID_empleado: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};




module.exports.project_create =  (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	const secret = "ITC_Besto_Team";
	const token = req.cookies.jwt

	if (token) {
		jwt.verify(token, secret, async (err, decoded_token) => {
			if (err) {
				console.log(err);
				res.status(400).json({errors: "Token invalid."});
			} else {
				let project = { 
					nombre: req.body.nombre,
					codigoProyecto: req.body.codigoProyecto,
					descripcion: req.body.descripcion,
					ID_empleado: decoded_token.id
				};
				

				db.Proyectos.create(project)
				.then((data) => {
					res.status(200).json({
						status: "success",
						message: "Project successfully created",
						payload: data
					});
				})
				.catch((err) => {
					res.status(500).json({
						status: "error",
						message: "Error creating project. " + err.message,
						payload: null
					});
				});
			}
		});

	} else {
		res.status(400).json({errors: "Not logged in."});
	}
};


module.exports.project_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Proyectos.destroy({
		where: {
			ID_proyecto: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Project successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Project could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting project. " + err.message,
				payload: null
			});
	});
};

module.exports.project_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Proyectos.update(req.body, {
		where: {
			ID_proyecto: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Project successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Project could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating project. " + err.message,
				payload: null
			});
	});
};
