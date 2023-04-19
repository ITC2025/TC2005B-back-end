'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProyectosEmpleados', [
      {
        ProyectoIDProyecto: 1,
        EmpleadoIDEmpleado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProyectoIDProyecto: 1,
        EmpleadoIDEmpleado: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProyectosEmpleados', null, {});
  }
};
