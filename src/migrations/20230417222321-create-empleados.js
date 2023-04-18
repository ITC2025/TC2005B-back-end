'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empleados', {
      ID_empleado: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_rol: {
        type : Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Roles',
          key: 'ID_rol'
        }
      },
      ID_oficina :{
        type : Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Oficinas',
          key: 'ID_oficina'
        }
      },
      name: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      correoElectronico: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empleados');
  }
};