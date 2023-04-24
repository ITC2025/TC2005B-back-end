'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProyectosEmpleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      this.belongsTo(models.Proyectos,{
        foreignKey: 'ID_proyecto'
      })

      this.belongsTo(models.Empleados, {
        foreignKey: 'ID_empleado'
      });
    }
  }
  ProyectosEmpleados.init({
    ID_proyecto_empleado: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date() 
    },
    updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'ProyectosEmpleados',
  });
  return ProyectosEmpleados;
};
