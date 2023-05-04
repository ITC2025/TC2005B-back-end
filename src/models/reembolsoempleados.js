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

      this.belongsTo(models.Cuentas,{
        foreignKey:'ID_cuenta'
      })

      this.belongsTo(models.StatusReembolsos,{
        foreignKey:'ID_status_reembolso'
      })

    }
  }
  ReembolsoEmpleados.init({
    ID_reembolso_empleados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ID_cuenta: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    ID_status_reembolso: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ReembolsoEmpleados',
  });
  return ReembolsoEmpleados;
};
