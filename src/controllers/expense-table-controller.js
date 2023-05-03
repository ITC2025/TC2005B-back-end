// Controller for expenses table screen:
//Pantalla de tabla de gastos

// - side_info
// - expense_table


const { stat } = require('fs');
let db = require('../models')
const { Op } = require("sequelize");

module.exports.side_info = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.findAll({
		where : {
			ID_solicitud_viatico: req.params.id
		}
	}).then((result) => {
		const viaticos = result.map((viatico) => {
			return {
				id: viatico.ID_proyecto,
				fechaInicio: viatico.fechaInicio,
				fechaTermino: viatico.fechaTermino,
				anticipo: viatico.monto
			}
		})
		res.send(viaticos);;
	});
};

module.exports.expense_table_user = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll({
		include: [{
			model: db.SolicitudViaticos,
			where: {ID_solicitud_viatico : req.params.id},
		},
		{
			model: db.StatusReporteGastos,
			where: {
				ID_status_reporte_gasto: {
				[Op.not]: 5
				}
			}
		},
		{
			model: db.TipoGastos
		}
	]
	}).then((result) => {
		console.log(result);
		const gastos = result.map((gasto) => {
			return {
				id: gasto.ID_reporte_gasto,
				fecha: gasto.fecha,
				tipo: gasto.TipoGasto.descripcion,
				concepto: gasto.concepto,
				total: gasto.monto,
				status: gasto.StatusReporteGasto.ID_status_reporte_gasto
			}
		})
		console.log(gastos);
		res.send(gastos);
	});

};

module.exports.expense_table_pm = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll({
		include: [{
			model: db.SolicitudViaticos,
			where: {ID_solicitud_viatico : req.params.id},
		},
		{
			model: db.StatusReporteGastos,
			where: {
				ID_status_reporte_gasto: 2
			}
		},
		{
			model: db.TipoGastos
		}
	]
	}).then((result) => {
		console.log(result);
		const gastos = result.map((gasto) => {
			return {
				id: gasto.ID_reporte_gasto,
				fecha: gasto.fecha,
				tipo: gasto.TipoGasto.descripcion,
				concepto: gasto.concepto,
				total: gasto.monto,
				status: gasto.StatusReporteGasto.ID_status_reporte_gasto
			}
		})
		console.log(gastos);
		res.send(gastos);
	});

};

module.exports.expense_table_admin = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll({
		include: [{
			model: db.SolicitudViaticos,
			where: {ID_solicitud_viatico : req.params.id},
		},
		{
			model: db.StatusReporteGastos,
			where: {
				ID_status_reporte_gasto: 3
			}
		},
		{
			model: db.TipoGastos
		}
	]
	}).then((result) => {
		console.log(result);
		const gastos = result.map((gasto) => {
			return {
				id: gasto.ID_reporte_gasto,
				fecha: gasto.fecha,
				tipo: gasto.TipoGasto.descripcion,
				concepto: gasto.concepto,
				total: gasto.monto,
				status: gasto.StatusReporteGasto.ID_status_reporte_gasto
			}
		})
		console.log(gastos);
		res.send(gastos);
	});

};

module.exports.sum_user = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.sum('monto', 
	{ where : {ID_solicitud_viatico : req.params.id, ID_status_reporte_gasto: {
		[Op.not]: 5
		}}, 
	})
	.then((resultado => {
		res.send({monto : resultado})
	}))

};

module.exports.sum_pm = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.sum('monto', 
	{ where : {ID_solicitud_viatico : req.params.id, ID_status_reporte_gasto: 2}, 
	})
	.then((resultado => {
		res.send({monto : resultado})
	}))

};

module.exports.sum_admin = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.sum('monto', 
	{ where : {ID_solicitud_viatico : req.params.id, ID_status_reporte_gasto: 3}, 
	})
	.then((resultado => {
		res.send({monto : resultado})
	}))

};






module.exports.expense_image = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll({
		where: {ID_reporte_gasto : req.params.id},
	}).then((result) => {
		const gastos = result.map((gasto) => {
			return {
				imagen: gasto.imagen
			}
		})
		console.log(gastos);
		res.send(gastos);
	});

};