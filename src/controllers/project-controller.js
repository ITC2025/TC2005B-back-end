// Controller for projects:
	
// 	- project_index
// 	- project_get_by_id
// 	- project_create
// 	- project_delete
// 	- project_update

let db = require('../models')

module.exports.project_index = (req, res) => {
	db.Proyectos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.project_get_by_id = (req, res) => {	
	db.Proyectos.findAll({
		where : {
			ID_proyecto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.project_create =  (req, res) => {
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

	let project = { 
		codigoProyecto: req.body.codigoProyecto,
        descripcion: req.body.descripcion,
        ID_empleado: req.body.ID_empleado
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
};


module.exports.project_delete = (req, res) => {
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