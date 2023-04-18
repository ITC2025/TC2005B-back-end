'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReembolsoCajas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReembolsoCajas.init({
    ID_reembolso_cajas: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ReembolsoCajas',
  });
  return ReembolsoCajas;
};