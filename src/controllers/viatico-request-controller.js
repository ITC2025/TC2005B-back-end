// Controller for Viatico Requests:
	
// 	- viatico_request_index
// 	- viatico_request_get_by_id
// 	- viatico_request_create (without dates)
// 	- viatico_request_delete
// 	- viatico_request_update

const { stat } = require('fs');
let db = require('../models')
const db = require('../models')

module.exports.viatico_request_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.viatico_request_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.findAll({
		where : {
			ID_solicitud_viatico: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};

module.exports.viatico_request_get_by_pm_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.findAll({
		include: [{
			model: db.Proyectos,
			where: {ID_empleado : req.params.id}
		}]
	}).then((result) => {
		res.send(result);
	});

};

module.exports.viatico_request_create =  (req, res) => {
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

	let viatico_request = { 
		monto: req.body.monto,
		descripcion: req.body.descripcion,
		destino: req.body.destino,
		fechaInicio: req.body.fechaInicio,
		fechaTermino: req.body.fechaTermino,
        ID_empleado: req.body.ID_empleado,
        ID_proyecto: req.body.ID_proyecto,
        ID_status_solicitud_viaticos: req.body.ID_status_solicitud_viaticos
	};

	db.SolicitudViaticos.create(viatico_request)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Viatico Request successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating Viatico Request. " + err.message,
				payload: null
			});
		});
};


module.exports.viatico_request_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.destroy({
		where: {
			ID_solicitud_viatico: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Viatico Request successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Viatico Request could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting Viatico Request. " + err.message,
				payload: null
			});
	});
};

module.exports.viatico_request_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.SolicitudViaticos.update(req.body, {
		where: {
			ID_solicitud_viatico: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Viatico Request successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Viatico Request could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating Viatico Request. " + err.message,
				payload: null
			});
	});
};

module.exports.solicitar_viatico = async (req, res) => {
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

	//Buscar empleado por nombre
	let empleado = await db.Empleados.findOne({ where: { name: req.body.nombre_empleado } });
	let proyecto = await db.Proyectos.findOne({ where: { codigoProyecto: req.body.codigo_proyecto }})
	let status = await db.StatusSolicitudViaticos.findOne({ where: { descripcion: req.body.status_descripcion }})

	console.log(empleado.ID_empleado)
	console.log(proyecto.ID_proyecto)
	console.log(status.ID_status_solicitud_viaticos)

	let viatico_request = { 
		monto: req.body.monto,
        ID_empleado: empleado.ID_empleado,
        ID_proyecto: proyecto.ID_proyecto,
        ID_status_solicitud_viaticos: status.ID_status_solicitud_viaticos
	};

	db.SolicitudViaticos.create(viatico_request)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Viatico Request successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating Viatico Request. " + err.message,
				payload: null
			});
		});
};