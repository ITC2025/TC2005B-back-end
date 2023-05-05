// Controller for viatico request status:
	
// 	- status_viatico_request_index
// 	- status_viatico_request_get_by_id
// 	- status_viatico_request_create
// 	- status_viatico_request_delete
// 	- status_viatico_request_update

const db = require('../models')

module.exports.status_viatico_request_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusSolicitudViaticos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.status_viatico_request_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusSolicitudViaticos.findAll({
		where : {
			ID_status_solicitud_viaticos: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.status_viatico_request_create =  (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	let status_viatico_request = { 
		descripcion: req.body.descripcion,
	};

	db.StatusSolicitudViaticos.create(status_viatico_request)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Viatico Request Status successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating Viatico Request Status. " + err.message,
				payload: null
			});
		});
};


module.exports.status_viatico_request_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusSolicitudViaticos.destroy({
		where: {
			ID_status_solicitud_viaticos: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Viatico Request Status successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Viatico Request Status could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting Viatico Request Status. " + err.message,
				payload: null
			});
	});
};

module.exports.status_viatico_request_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.StatusSolicitudViaticos.update(req.body, {
		where: {
			ID_status_solicitud_viaticos: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Viatico Request Status successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Viatico Request Status could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating Viatico Request Status. " + err.message,
				payload: null
			});
	});
};
