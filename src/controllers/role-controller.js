// Controller for roles:
	
// 	- role_index
// 	- role_get_by_id
// 	- role_create
// 	- role_delete
// 	- role_update

let db = require('../models')

module.exports.role_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Roles.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.role_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Roles.findAll({
		where : {
			ID_rol: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.role_create =  (req, res) => {
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

	let role = { 
		descripcion: req.body.descripcion,
	};

	db.Roles.create(role)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Role successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating role. " + err.message,
				payload: null
			});
		});
};


module.exports.role_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Roles.destroy({
		where: {
			ID_rol: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Role successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Role could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting role. " + err.message,
				payload: null
			});
	});
};

module.exports.role_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Roles.update(req.body, {
		where: {
			ID_rol: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Role successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Role could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating role. " + err.message,
				payload: null
			});
	});
};
