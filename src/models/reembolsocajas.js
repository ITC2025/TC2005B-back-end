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

      this.belongsTo(models.Cuentas,{
        foreignKey:'ID_cuenta'
      })

      this.belongsTo(models.StatusReembolsos,{
        foreignKey:'ID_status_reembolso'
      })
    }
  }
  ReembolsoCajas.init({
    ID_reembolso_cajas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    monto: DataTypes.DECIMAL,
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
    modelName: 'ReembolsoCajas',
  });
  return ReembolsoCajas;
};
