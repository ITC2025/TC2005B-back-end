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
      this.belongsTo(models.ReembolsoCajas, {
        foreignKey: 'ID_reembolso_caja'
      });
      this.belongsTo(models.ReembolsoCajas, {
        foreignKey: 'ID_reembolso_empleado'
      });
    }
  }
  StatusReembolsos.init({
    ID_status_reembolso: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'StatusReembolsos',
  });
  return StatusReembolsos;
};