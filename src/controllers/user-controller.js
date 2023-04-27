// Controller for users:
	
// 	- user_index
// 	- user_get_by_id
// 	- user_create
// 	- user_delete
// 	- user_update
const db = require('../models')
const bcrypt = require("bcrypt");
const { isEmail } = require("validator");

const hash_password = async (password) => {
	const salt = await bcrypt.genSalt();
	let hashed_password = await bcrypt.hash(password, salt);

	return hashed_password;
}

let db = require('../models')

module.exports.userSaldoGet = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Cuentas.findOne({
		where: {
			ID_empleado: req.params.id
		}
	})
	.then((data) => {
		const saldo = {
			saldo: data.saldo
		}
		res.send(saldo)
	})
}

module.exports.userViaticos = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.SolicitudViaticos.findAll({
		where: {
			ID_empleado: req.params.id
		},
		include: [
			{
				model: db.Proyectos
			},
			{
				model: db.StatusSolicitudViaticos
			}
		]
	})
	.then((data) => {
		const expenses = data.map((expenses) => {
			return {
				ID:expenses.ID_solicitud_viatico,
				fecha:expenses.fechaEnvioSolicitud,
				proyecto: expenses.Proyecto.codigoProyecto,
				descripcion: expenses.Proyecto.descripcion,
				total: expenses.monto,
				estado: expenses.StatusSolicitudViatico.descripcion
			}
		})
		res.send(expenses)
	})
}

module.exports.user_index = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Empleados.findAll()
		.then((result) => {
			res.send(result);
		});
};

module.exports.user_get_by_role = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Empleados.findAll({
		where : {
			ID_rol: req.params.rol
		}
	}).then((result) => {
			res.send(result);
	});
};

module.exports.user_get_by_id = (req, res) => {	
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Empleados.findAll({
		where : {
			ID_empleado: req.params.id
		}
	}).then((result) => {
			res.send(result);
	});
};


module.exports.user_create =  async (req, res) => {
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	if (!(await isEmail(req.body.correoElectronico))) {
		res.status(404).json({
			status: "error",
			message: "Invalid Email",
			payload: null
		});

		return;
	}

	const user_hashed_password = await hash_password(req.body.password);
	
	let user = { 
		ID_rol: req.body.ID_rol,
		ID_oficina: req.body.ID_oficina,
		name: req.body.name,
		apellido: req.body.apellido,
		telefono: req.body.telefono,
		correoElectronico: req.body.correoElectronico,
		password: user_hashed_password	
	};

	db.Empleados.create(user)
		.then((data) => {
			res.status(200).json({
				status: "success",
				message: "User successfully created",
				payload: data
			});
		})
		.catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error creating user. " + err.message,
				payload: null
			});
		});
};


module.exports.user_delete = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	db.Empleados.destroy({
		where: {
			ID_empleado: req.params.id
		}
	}).then((success) => {
		if (success) {
				res.status(200).json({
					status: "success",
					message: "User successfully deleted",
					payload: null 
				});
		}

		else {
				res.status(200).json({
					status: "error",
					message: "User could not be deleted",
					payload: null
				});
		}
	}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error deleting user. " + err.message,
				payload: null
			});
	});
};

module.exports.user_update = (req, res) => {
	res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
	if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
		res.status(404).json({
			status: "error",
			message: "Empty body",
			payload: null
		});

		return;
	};

	db.Empleados.update(req.body, {
		where: {
			ID_empleado: req.params.id
		}}).then((success) => {
			if (success) {
				res.status(200).json({
					status: "success",
					message: "User successfully updated",
					payload: req.body
				});
			}

			else {
				res.status(500).json({
					status: "error",
					message: "User could not be updated",
					payload: null
				});
			}
		}).catch((err) => {
			res.status(500).json({
				status: "error",
				message: "Error updating user. " + err.message,
				payload: null
			});
	});
};
