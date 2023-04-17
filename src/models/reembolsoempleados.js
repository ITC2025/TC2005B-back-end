'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReembolsoEmpleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReembolsoEmpleados.init({
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ReembolsoEmpleados',
  });
  return ReembolsoEmpleados;
};