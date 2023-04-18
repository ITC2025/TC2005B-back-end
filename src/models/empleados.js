'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      this.belongsTo(models.Roles,{
        foreignKey:'ID_rol'
      })

      this.belongsTo(models.Oficinas,{
        foreignKey:'ID_oficina'
      })

      this.hasOne(models.Cuentas,{
        foreignKey:'ID_empleado'
      })

      this.hasMany(models.Notificaciones,{
        foreignKey:'ID_empleado'
      })

      this.hasMany(models.SolicitudViaticos,{
        foreignKey:'ID_empleado'
      })

      this.belongsToMany(models.Proyectos, {through : 'ProyectosEmpleados'})
    }
  }
  Empleados.init({
    ID_empleado: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    ID_rol: {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    ID_oficina: {
        type : DataTypes.INTEGER,
        allowNull: false,
    },
    name: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    correoElectronico: DataTypes.STRING,
    password: DataTypes.STRING,
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
    modelName: 'Empleados',
  });
  return Empleados;
};
