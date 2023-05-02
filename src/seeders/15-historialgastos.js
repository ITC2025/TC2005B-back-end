'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HistorialGastos', [
      {
        ID_historico_gasto: 1,
        ID_reporte_gasto: 2,
        ID_status_reporte_gasto: 1,
        fechaModificacion: new Date('2023-04-16 10:28:45'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_gasto: 2,
        ID_reporte_gasto: 2,
        ID_status_reporte_gasto: 2,
        fechaModificacion: new Date('2023-04-17 13:12:56'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_gasto: 3,
        ID_reporte_gasto: 2,
        ID_status_reporte_gasto: 3,
        fechaModificacion: new Date('2023-04-21 09:05:17'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_gasto: 4,
        ID_reporte_gasto: 4,
        ID_status_reporte_gasto: 1,
        fechaModificacion: new Date('2023-04-22 17:20:38'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_gasto: 5,
        ID_reporte_gasto: 4,
        ID_status_reporte_gasto: 2,
        fechaModificacion: new Date('2023-04-22 21:44:16'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_gasto: 6,
        ID_reporte_gasto: 4,
        ID_status_reporte_gasto: 5,
        fechaModificacion: new Date('2023-04-28 13:19:55'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HistorialGastos', null, {});
  }
};
