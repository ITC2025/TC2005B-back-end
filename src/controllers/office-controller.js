// Controller for offices:
	
// 	- office_index
// 	- office_get_by_id
// 	- office_create
// 	- office_delete
// 	- office_update

let db = require('../models')

module.exports.office_index = (req, res) => {
	db.Oficinas.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.office_get_by_id = (req, res) => {	
	db.Oficinas.findAll({
		where : {
			ID_oficina: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.office_create =  (req, res) => {
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

	let office = { 
		nombre: req.body.nombre,
		ciudad: req.body.ciudad,
		estado: req.body.estado,
		cp: req.body.cp,
	};

	db.Oficinas.create(office)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Office successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating office. " + err.message,
				payload: null
			});
		});
};


module.exports.office_delete = (req, res) => {
	db.Oficinas.destroy({
		where: {
			ID_oficina: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Office successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Office could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting office. " + err.message,
				payload: null
			});
	});
};

module.exports.office_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Oficinas.update(req.body, {
		where: {
			ID_oficina: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Office successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Office could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating office. " + err.message,
				payload: null
			});
	});
};
