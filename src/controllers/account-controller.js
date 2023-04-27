// Controller for accounts:
	
// 	- account_index
// 	- account_get_by_id
// 	- account_create
// 	- account_delete
// 	- account_update

const db = require('../models')

module.exports.account_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Cuentas.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.account_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Cuentas.findAll({
		where : {
			ID_cuenta: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.account_create =  (req, res) => {
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

	let account = { 
		saldo: req.body.saldo,
        ID_empleado: req.body.ID_empleado
	};

	db.Cuentas.create(account)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "Account successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating Account. " + err.message,
				payload: null
			});
		});
};


module.exports.account_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Cuentas.destroy({
		where: {
			ID_cuenta: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "Account successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "Account could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting Account. " + err.message,
				payload: null
			});
	});
};

module.exports.account_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Cuentas.update(req.body, {
		where: {
			ID_cuenta: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "Account successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "Account could not be updated",
					payload: null
				});
			}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating Account. " + err.message,
				payload: null
			});
	});
};
