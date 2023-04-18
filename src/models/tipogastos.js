'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TipoGastos.init({
    ID_tipo_gasto: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoGastos',
  });
  return TipoGastos;
};