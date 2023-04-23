// Controller for expense report:

// 	- expense_report_index
// 	- expense_report_get_by_id
// 	- expense_report_create
// 	- expense_report_delete
// 	- expense_report_update

let db = require('../models')

module.exports.expense_report_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.expense_report_get_by_id = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);	
	db.ReporteGastos.findAll({
		where : {
			ID_reporte_gasto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.expense_report_create =  (req, res) => {
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

	let reportegastos = { 
		concepto: req.body.concepto,
        monto:req.body.monto,
        fecha:req.body.fecha,
        imagen:req.body.imagen,
        ID_solicitud_viatico: req.body.ID_solicitud_viatico,
        ID_tipo_gasto: req.body.ID_tipo_gasto,
        ID_status_reporte_gasto: req.body.ID_status_reporte_gasto
	};

	db.ReporteGastos.create(reportegastos)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Expense report successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating expense report. " + err.message,
				payload: null
			});
		});
};


module.exports.expense_report_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.destroy({
		where: {
			ID_reporte_gasto: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense report successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Expense report could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting expense report. " + err.message,
				payload: null
			});
	});
};

module.exports.expense_report_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.ReporteGastos.update(req.body, {
		where: {
			ID_reporte_gasto: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense report successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Expense report could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating expense report. " + err.message,
				payload: null
			});
	});
};