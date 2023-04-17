'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistorialGastos.init({
    fechaModificacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HistorialGastos',
  });
  return HistorialGastos;
};