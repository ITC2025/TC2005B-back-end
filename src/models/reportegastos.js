'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReporteGastos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.SolicitudViaticos,{
        foreignKey:'ID_solicitud_viatico'
      })

      this.belongsTo(models.TipoGastos,{
        foreignKey:'ID_tipo_gasto'

      })

      this.belongsTo(models.StatusReporteGastos,{
        foreignKey:'ID_status_reporte_gasto'
      })

      this.hasMany(models.HistorialGastos,{
        foreignKey:'ID_reporte_gasto'
      })
    }
  }
  ReporteGastos.init({
    ID_reporte_gasto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    ID_solicitud_viatico: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    ID_tipo_gasto: {
      type : DataTypes.INTEGER,
      allowNull: false,
    },
    ID_status_reporte_gasto: {
      type : DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 2
    },
    concepto: DataTypes.STRING,
    monto: DataTypes.DECIMAL,
    fecha: DataTypes.DATEONLY,
    imagen: DataTypes.STRING,
    factura: {
      type: DataTypes.STRING,
      allowNull: true
    },
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
    modelName: 'ReporteGastos',
  });
  return ReporteGastos;
};
