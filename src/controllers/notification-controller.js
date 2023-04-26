// Controller for notifications:
	
// 	- notification_index
// 	- notification_get_by_id
// 	- notification_create
// 	- notification_delete
// 	- notification_update

const db = require('../models')

module.exports.notification_index = (req, res) => {
	db.Notificaciones.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.notification_get_by_id = (req, res) => {	
	db.Notificaciones.findAll({
		where : {
			ID_notificacion: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.notification_create =  (req, res) => {
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

	let notification = { 
		descripcion: req.body.descripcion,
        ID_empleado: req.body.ID_empleado
	};

	db.Notificaciones.create(notification)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Notification successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating notification. " + err.message,
				payload: null
			});
		});
};


module.exports.notification_delete = (req, res) => {
	db.Notificaciones.destroy({
		where: {
			ID_notificacion: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Notification successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Notification could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting notification. " + err.message,
				payload: null
			});
	});
};

module.exports.notification_update = (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Notificaciones.update(req.body, {
		where: {
			ID_notificacion: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Notification successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Notification could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating notification. " + err.message,
				payload: null
			});
	});
};
