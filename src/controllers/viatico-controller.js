// Controller for Viaticos:

// 	- viatico_index
// 	- viatico_get_by_id
// 	- viatico_create (without dates)
// 	- viatico_delete
// 	- viatico_update

const db = require("../models");

module.exports.viatico_index = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  db.Viaticos.findAll().then((result) => {
    res.send(result);
  });
};

module.exports.viatico_get_by_id = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  db.Viaticos.findAll({
    where: {
      ID_viatico: req.params.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

module.exports.viatico_get_expenses_by_ID_solicitud_viatico = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  db.Viaticos.findAll({
    where: {
      ID_solicitud_viatico: req.params.id,
    },
  }).then((result) => {
    res.send(result);
  });
};

module.exports.viatico_create = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
    res.status(404).json({
      status: "error",
      message: "Empty body",
      payload: null,
    });

    return;
  }

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

  let viatico = {
    concepto: req.body.concepto,
    monto: req.body.monto,
    ID_solicitud_viatico: req.body.ID_solicitud_viatico,
  };

  db.Viaticos.create(viatico)
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "Viatico successfully created",
        payload: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error creating Viatico. " + err.message,
        payload: null,
      });
    });
};

module.exports.viatico_delete = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  db.Viaticos.destroy({
    where: {
      ID_viatico: req.params.id,
    },
  })
    .then((success) => {
      if (success) {
        res.status(200).json({
          status: "success",
          message: "Viatico successfully deleted",
          payload: null,
        });
      } else {
        res.status(200).json({
          status: "error",
          message: "Viatico could not be deleted",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error deleting Viatico. " + err.message,
        payload: null,
      });
    });
};

module.exports.viatico_update = (req, res) => {
  res.set("Access-Control-Allow-Origin", ["http://localhost:3000"]);
  if (!req.body || JSON.stringify(req.body) === JSON.stringify({})) {
    res.status(404).json({
      status: "error",
      message: "Empty body",
      payload: null,
    });

    return;
  }

  db.Viaticos.update(req.body, {
    where: {
      ID_viatico: req.params.id,
    },
  })
    .then((success) => {
      if (success) {
        res.status(200).json({
          status: "success",
          message: "Viatico successfully updated",
          payload: req.body,
        });
      } else {
        res.status(500).json({
          status: "error",
          message: "Viatico could not be updated",
          payload: null,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        status: "error",
        message: "Error updating Viatico. " + err.message,
        payload: null,
      });
    });
};
