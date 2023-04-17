'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HistorialViaticos.init({
    fechaModificacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HistorialViaticos',
  });
  return HistorialViaticos;
};