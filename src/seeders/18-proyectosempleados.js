'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ProyectosEmpleados', [
      {
        ID_proyecto: 1,
        ID_empleado: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_proyecto: 1,
        ID_empleado: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ProyectosEmpleados', null, {});
  }
};
