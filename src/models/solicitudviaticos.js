'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SolicitudViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.StatusSolicitudViaticos,{
        foreignKey:'ID_status_solicitud_viaticos'
      })

      this.hasOne(models.Viaticos,{
        foreignKey:'ID_solicitud_viatico'
      })

      this.hasMany(models.ReporteGastos,{
        foreignKey:'ID_solicitud_viatico'
      })

      this.belongsTo(models.Proyectos,{
        foreignKey:'ID_proyecto'
      })

      this.hasMany(models.HistorialViaticos,{
        foreignKey: 'ID_solicitud_viatico'
      })

      this.belongsTo(models.Empleados,{
        foreignKey:'ID_empleado'
      })
    }
  }
  SolicitudViaticos.init({
    ID_solicitud_viatico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    monto: DataTypes.DECIMAL,
    descripcion: DataTypes.STRING,
    destino: DataTypes.STRING,
    fechaInicio: DataTypes.DATEONLY,
    fechaTermino: DataTypes.DATEONLY,
    fechaEnvioSolicitud: DataTypes.DATE,
    fechaAprobado: DataTypes.DATE,
    referenciaBancaria: DataTypes.STRING,
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
    modelName: 'SolicitudViaticos',
  });
  return SolicitudViaticos;
};
