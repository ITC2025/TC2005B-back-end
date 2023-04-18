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
    }
  }
  HistorialViaticos.init({
    ID_historico_gasto: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    fechaModificacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'HistorialViaticos',
  });
  return HistorialViaticos;
};