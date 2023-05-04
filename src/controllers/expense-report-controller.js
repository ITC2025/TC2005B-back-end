// Controller for expense report:
//Reporte de Gastos

// 	- expense_report_index
// 	- expense_report_get_by_id
// 	- expense_report_create
// 	- expense_report_delete
// 	- expense_report_update
//  - expense_report_patch_status

const { stat } = require('fs');
let db = require('../models')

module.exports.expense_report_index = (req, res) => {
	db.ReporteGastos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.expense_report_get_by_id = (req, res) => {
	db.ReporteGastos.findOne({
		where : {
			ID_reporte_gasto: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};

module.exports.expense_report_pm_get_by_viatico_id = (req, res) => {	
	db.ReporteGastos.findAll({
		include: [{
			model: db.SolicitudViaticos,
			where: {ID_solicitud_viatico : req.params.id},
		},
		{
			model: db.TipoGastos
		},
		{
			model: db.StatusReporteGastos,
			where: {ID_status_reporte_gasto : 2}
		}
	]
	}).then((result) => {
		const gastos = result.map((gasto) => {
			return {
				id: gasto.ID_reporte_gasto,
				fecha: gasto.createdAt,
				concepto: gasto.concepto,
				tipo: gasto.TipoGasto.descripcion,
				total: gasto.monto
			}
		})
		res.send(gastos);
	});

};


module.exports.expense_report_create =  async (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	let image_path = "";
	let factura_path = "";

	if (req.files["imagen"]) {
		image_path = req.files["imagen"][0].filename;
	}

	if (req.files["xml"]) {
		factura_path = req.files["xml"][0].filename;
	}

	let reportegastos = { 
		concepto: req.body.concepto,
        monto: req.body.monto,
        fecha: req.body.fecha,
        imagen: image_path,
		factura: factura_path,
        ID_solicitud_viatico: req.body.ID_solicitud_viatico,
        ID_tipo_gasto: req.body.ID_tipo_gasto,
        ID_status_reporte_gasto: req.body.status 
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


module.exports.expense_report_patch_status = (req, res) => {
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
			ID_solicitud_viatico: req.params.id
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
