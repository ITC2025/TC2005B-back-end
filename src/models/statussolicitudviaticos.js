'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatusSolicitudViaticos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasOne(models.SolicitudViaticos,{
        foreignKey:'ID_solicitud_viatico'
      })
    }
  }
  StatusSolicitudViaticos.init({
    ID_status_solicitud_viaticos: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusSolicitudViaticos',
  });
  return StatusSolicitudViaticos;
};