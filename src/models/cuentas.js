'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cuentas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {

      this.belongsTo(models.Empleados,{
        foreignKey:'ID_empleado'
      })
      
    }
  }
  Cuentas.init({
    ID_cuenta: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    saldo: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Cuentas',
  });
  return Cuentas;
};
