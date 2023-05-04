'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.ReporteGastos,{
        foreignKey:'ID_reporte_gasto'
      })

      this.belongsTo(models.StatusReporteGastos,{
        foreignKey: 'ID_status_reporte_gasto'
      })
    }
  }
  HistorialGastos.init({
    ID_historico_gasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ID_reporte_gasto: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },ID_status_reporte_gasto: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    fechaModificacion: DataTypes.DATE,
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
    modelName: 'HistorialGastos',
  });
  return HistorialGastos;
};
