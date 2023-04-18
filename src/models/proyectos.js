'use strict';
const {
  Model
} = require('sequelize');
const empleados = require('./empleados');
module.exports = (sequelize, DataTypes) => {
  class Proyectos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.hasMany(models.SolicitudViaticos,{
        foreignKey:'ID_proyecto'
      })

      this.belongsToMany(models.Empleados, {through: 'ProyectosEmpleados'})

    }
  }
  Proyectos.init({
    ID_proyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    codigoProyecto: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Proyectos',
  });
  return Proyectos;
};
