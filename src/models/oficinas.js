'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Oficinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Oficinas.init({
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    estado: DataTypes.STRING,
    cp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Oficinas',
  });
  return Oficinas;
};