// Controller for expenses table screen:
//Pantalla de tabla de gastos

// - side_info
// - expense_table


const { stat } = require('fs');
let db = require('../models')

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

module.exports.expense_table = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.findAll({
		include: [{
			model: db.SolicitudViaticos,
			where: {ID_solicitud_viatico : req.params.id},
		},
		{
			model: db.TipoGastos
		}
	]
	}).then((result) => {
		const gastos = result.map((gasto) => {
			return {
				id: gasto.ID_reporte_gasto,
				fecha: gasto.fecha,
				tipo: gasto.TipoGasto.descripcion,
				concepto: gasto.concepto,
				total: gasto.monto,
				imagen: gasto.imagen
			}
		})
		console.log(gastos);
		res.send(gastos);
	});

};

module.exports.sum = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.ReporteGastos.sum('monto', { where : {ID_solicitud_viatico : req.params.id}})
	.then((resultado => {
		res.send({monto : resultado})
	}))

};