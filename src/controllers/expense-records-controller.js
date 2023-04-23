// Controller for expense record:

// 	- expense_record_index
// 	- expense_record_get_by_id
// 	- expense_record_create
// 	- expense_record_delete
// 	- expense_record_update

let db = require('../models')

module.exports.expense_record_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.HistorialGastos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.expense_record_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.HistorialGastos.findAll({
		where : {
			ID_historico_gasto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.expense_record_create =  (req, res) => {
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

	let historialgastos = { 
        fechaModificacion: req.body.fechaModificacion,
        ID_reporte_gasto: req.body.ID_reporte_gasto,
        ID_status_reporte_gasto: req.body.ID_status_reporte_gasto		
	};

	db.HistorialGastos.create(historialgastos)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Expense record successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating expense record. " + err.message,
				payload: null
			});
		});
};


module.exports.expense_record_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.HistorialGastos.destroy({
		where: {
			ID_Historial_gasto: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense record successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Expense record could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting expense record. " + err.message,
				payload: null
			});
	});
};

module.exports.expense_record_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.HistorialGastos.update(req.body, {
		where: {
			ID_Historial_gasto: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense record successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Expense record could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating expense record. " + err.message,
				payload: null
			});
	});
};