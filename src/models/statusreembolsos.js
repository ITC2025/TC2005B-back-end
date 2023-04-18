'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusReembolsos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.hasOne(models.ReembolsoCajas,{
        foreignKey:'ID_status_reembolso'
      })

      this.hasOne(models.ReembolsoEmpleados,{
        foreignKey:'ID_status_reembolso'
      })

    }
  }
  StatusReembolsos.init({
    ID_status_reembolso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    descripcion: DataTypes.STRING,
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
    modelName: 'StatusReembolsos',
  });
  return StatusReembolsos;
};
