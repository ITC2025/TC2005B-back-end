// Controller for refund cashier:
	
// 	- refund_cashier_index
// 	- refund_cashier_get_by_id
// 	- refund_cashier_create
// 	- refund_cashier_delete
// 	- refund_cashier_update

let db = require('../models')

module.exports.refund_cashier_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReembolsoCajas.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.refund_cashier_get_by_id = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReembolsoCajas.findAll({
		where : {
			ID_reembolso_cajas: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.refund_cashier_create =  (req, res) => {
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

	let refund_cashier = { 
		monto: req.body.monto,
        ID_cuenta: req.body.ID_cuenta,
		ID_status_reembolso: req.body.ID_status_reembolso
	};

	db.ReembolsoCajas.create(refund_cashier)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Refund cashier successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating refund cashier. " + err.message,
				payload: null
			});
		});
};


module.exports.refund_cashier_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReembolsoCajas.destroy({
		where: {
			ID_reembolso_cajas: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Refund cashier successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Refund cashier could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting refund cashier. " + err.message,
				payload: null
			});
	});
};

module.exports.refund_cashier_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.ReembolsoCajas.update(req.body, {
		where: {
			ID_reembolso_cajas: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Refund cashier successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Refund cashier could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating refund cashier. " + err.message,
				payload: null
			});
	});
};