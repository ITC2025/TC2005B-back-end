'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProyectosEmpleados', {
      ID_proyecto_empleado:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_proyecto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {        
          model: 'Proyectos',
          key: 'ID_proyecto'
        }
      },
      ID_empleado: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {        
          model: 'Empleados',
          key: 'ID_empleado'
        }
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
    await queryInterface.dropTable('ProyectosEmpleados');
  }
};