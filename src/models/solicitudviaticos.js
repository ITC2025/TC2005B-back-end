'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolicitudViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SolicitudViaticos.init({
    ID_solicitud_viatico: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    monto: DataTypes.DECIMAL,
    fechaEnvioSolicitud: DataTypes.DATE,
    fechaAprobado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'SolicitudViaticos',
  });
  return SolicitudViaticos;
};