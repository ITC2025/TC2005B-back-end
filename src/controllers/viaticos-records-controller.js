// Controller for viaticos record:

// 	- viaticos_record_index
// 	- viaticos_record_get_by_id
// 	- viaticos_record_create
// 	- viaticos_record_delete
// 	- viaticos_record_update

let db = require('../models')

module.exports.viaticos_record_index = (req, res) => {
	db.HistorialViaticos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.viaticos_record_get_by_id = (req, res) => {	
	db.HistorialViaticos.findAll({
		where : {
			ID_historico_viatico: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.viaticos_record_create =  (req, res) => {
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

	let historialviaticos = { 
        fechaModificacion: req.body.fechaModificacion,
        ID_solicitud_viatico: req.body.ID_solicitud_viatico,
        ID_status_solicitud_viatico: req.body.ID_status_solicitud_viatico		
	};

	db.HistorialViaticos.create(historialviaticos)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Viaticos record successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating viaticos record. " + err.message,
				payload: null
			});
		});
};


module.exports.viaticos_record_delete = (req, res) => {
	db.HistorialViaticos.destroy({
		where: {
			ID_historico_viatico: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Viaticos record successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Viaticos record could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting viaticos record. " + err.message,
				payload: null
			});
	});
};

module.exports.viaticos_record_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.HistorialViaticos.update(req.body, {
		where: {
			ID_historico_viatico: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Viaticos record successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Viaticos record could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating viaticos record. " + err.message,
				payload: null
			});
	});
};