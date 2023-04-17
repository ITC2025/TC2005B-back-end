'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusSolicitudViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusSolicitudViaticos.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusSolicitudViaticos',
  });
  return StatusSolicitudViaticos;
};