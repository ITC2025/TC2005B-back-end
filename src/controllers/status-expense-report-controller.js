// Controller for expense report status:
	
// 	- status_expense_report_index
// 	- status_expense_report_get_by_id
// 	- status_expense_report_create
// 	- status_expense_report_delete
// 	- status_expense_report_update

let db = require('../models')

module.exports.status_expense_report_index = (req, res) => {
	db.StatusReporteGastos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.status_expense_report_get_by_id = (req, res) => {	
	db.StatusReporteGastos.findAll({
		where : {
			ID_status_reporte_gasto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.status_expense_report_create =  (req, res) => {
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

	let status_expense_report = { 
		descripcion: req.body.descripcion,
	};

	db.StatusReporteGastos.create(status_expense_report)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Expense Report Status successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating status_expense_report. " + err.message,
				payload: null
			});
		});
};


module.exports.status_expense_report_delete = (req, res) => {
	db.StatusReporteGastos.destroy({
		where: {
			ID_status_reporte_gasto: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense Report Status successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Expense Report Status could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting Expense Report Status. " + err.message,
				payload: null
			});
	});
};

module.exports.status_expense_report_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.StatusReporteGastos.update(req.body, {
		where: {
			ID_status_reporte_gasto: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Expense Report Status successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Expense Report Status could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating Expense Report Status. " + err.message,
				payload: null
			});
	});
};
