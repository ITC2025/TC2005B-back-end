'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Proyectos', [
      {
        ID_proyecto: 1,
        ID_empleado: 2,
        codigoProyecto: 'FT890',
        nombre: 'MinionCo',
        descripcion: 'Automatización de almacén a MinionCo',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Proyectos', null, {});
  }
};
