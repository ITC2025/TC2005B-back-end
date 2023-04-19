// Controller for expense types:
	
// 	- type_expense_index
// 	- type_expense_get_by_id
// 	- type_expense_create
// 	- type_expense_delete
// 	- type_expense_update

let db = require('../models')

module.exports.type_expense_index = (req, res) => {
	db.TipoGastos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.type_expense_get_by_id = (req, res) => {	
	db.TipoGastos.findAll({
		where : {
			ID_tipo_gasto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.type_expense_create =  (req, res) => {
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

	let type_expense = { 
		descripcion: req.body.descripcion,
	};

	db.TipoGastos.create(type_expense)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Expense Type successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating Expense Type. " + err.message,
				payload: null
			});
		});
};


module.exports.type_expense_delete = (req, res) => {
	db.TipoGastos.destroy({
		where: {
			ID_tipo_gasto: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense Type successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Expense Type could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting Expense Type. " + err.message,
				payload: null
			});
	});
};

module.exports.type_expense_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.TipoGastos.update(req.body, {
		where: {
			ID_tipo_gasto: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense Type successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Expense Type could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating Expense Type. " + err.message,
				payload: null
			});
	});
};
