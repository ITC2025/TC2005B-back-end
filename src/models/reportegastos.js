'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReporteGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReporteGastos.init({
    concepto: DataTypes.STRING,
    monto: DataTypes.DECIMAL,
    fecha: DataTypes.DATE,
    imagen: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'ReporteGastos',
  });
  return ReporteGastos;
};