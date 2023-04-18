'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusReporteGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusReporteGastos.init({
    ID_status_reporte_gasto: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusReporteGastos',
  });
  return StatusReporteGastos;
};