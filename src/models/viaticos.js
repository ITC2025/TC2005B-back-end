'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Viaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Viaticos.init({
    ID_viatico: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    concepto: DataTypes.STRING,
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Viaticos',
  });
  return Viaticos;
};