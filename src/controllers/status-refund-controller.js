// Controller for status_refunds:
	
// 	- status_refund_index
// 	- status_refund_get_by_id
// 	- status_refund_create
// 	- status_refund_delete
// 	- status_refund_update

let db = require('../models')

module.exports.status_refund_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusReembolsos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.status_refund_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusReembolsos.findAll({
		where : {
			ID_status_reembolso: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.status_refund_create =  (req, res) => {
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

	let status_refund = { 
		descripcion: req.body.descripcion,
	};

	db.StatusReembolsos.create(status_refund)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "StatusRefund successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating StatusRefund. " + err.message,
				payload: null
			});
		});
};


module.exports.status_refund_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.StatusReembolsos.destroy({
		where: {
			ID_status_reembolso: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "StatusRefund successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "StatusRefund could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting StatusRefund. " + err.message,
				payload: null
			});
	});
};

module.exports.status_refund_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.StatusReembolsos.update(req.body, {
		where: {
			ID_status_reembolso: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "StatusRefund successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "StatusRefund could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating StatusRefund. " + err.message,
				payload: null
			});
	});
};