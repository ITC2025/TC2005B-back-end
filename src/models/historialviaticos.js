'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HistorialViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.SolicitudViaticos,{
        foreignKey: 'ID_solicitud_viatico'
      })

      this.belongsTo(models.StatusSolicitudViaticos,{
        foreignKey: 'ID_status_solicitud_viaticos'
      })
    }
  }
  HistorialViaticos.init({
    ID_historico_viatico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    modelName: 'HistorialViaticos',
  });
  return HistorialViaticos;
};
