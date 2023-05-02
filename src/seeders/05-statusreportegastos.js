'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusReporteGastos', [
      {
        ID_status_reporte_gasto: 1,
        descripcion: 'Borrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_reporte_gasto: 2,
        descripcion: 'Enviado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_reporte_gasto: 3,
        descripcion: 'Aprobado por PM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_reporte_gasto: 4,
        descripcion: 'Aprobado por Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_reporte_gasto: 5,
        descripcion: 'Rechazado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusReporteGastos', null, {});
  }
};
