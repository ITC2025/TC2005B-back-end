'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Proyectos', [
      {
        ID_proyecto: 1,
        ID_empleado: 2,
        codigoProyecto: 'FT890',
        nombre: 'PepsiCo',
        descripcion: 'Automatización de almacén a MinionCo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_proyecto: 2,
        ID_empleado: 2,
        codigoProyecto: 'PC1010',
        nombre: 'MinionCo',
        descripcion: 'Proyecto de Pepsi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_proyecto: 3,
        ID_empleado: 2,
        codigoProyecto: 'MC1756',
        nombre: 'Recursos Humanos',
        descripcion: 'Recursos Humanos',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Proyectos', null, {});
  }
};
