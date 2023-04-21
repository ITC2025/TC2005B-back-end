// Controller for refund user:

// 	- refund_user_index
// 	- refund_user_get_by_id
// 	- refund_user_create
// 	- refund_user_delete
// 	- refund_user_update

let db = require('../models')

module.exports.refund_user_index = (req, res) => {
	db.ReembolsoEmpleados.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.refund_user_get_by_id = (req, res) => {	
	db.ReembolsoEmpleados.findAll({
		where : {
			ID_reembolso_empleados: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.refund_user_create =  (req, res) => {
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

	let refund_user = { 
		monto: req.body.monto,
        ID_cuenta: req.body.ID_cuenta,
		ID_status_reembolso: req.body.ID_status_reembolso
	};

	db.ReembolsoEmpleados.create(refund_user)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Refund user successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating refund user. " + err.message,
				payload: null
			});
		});
};


module.exports.refund_user_delete = (req, res) => {
	db.ReembolsoEmpleados.destroy({
		where: {
			ID_reembolso_empleados: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Refund user successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Refund user could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting refund user. " + err.message,
				payload: null
			});
	});
};

module.exports.refund_user_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.ReembolsoEmpleados.update(req.body, {
		where: {
			ID_reembolso_empleados: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Refund user successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Refund user could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating refund user. " + err.message,
				payload: null
			});
	});
};