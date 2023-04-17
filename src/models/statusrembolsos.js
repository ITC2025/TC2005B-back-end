'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusRembolsos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatusRembolsos.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusRembolsos',
  });
  return StatusRembolsos;
};