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

      // 
      this.belongsTo(models.Empleados,{
        foreignKey:'ID_empleado'
      })

      this.hasMany(models.ReembolsoCajas,{
        foreignKey:'ID_cuenta'
      })

      this.hasMany(models.ReembolsoEmpleados,{
        foreignKey:'ID_cuenta'
      })
      
    }
  }
  Cuentas.init({
    ID_cuenta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    saldo: DataTypes.DECIMAL,
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date() 
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Cuentas',
  });
  return Cuentas;
};
