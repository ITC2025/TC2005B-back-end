'use strict';

const { DATEONLY } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReporteGastos', [
      {
        ID_reporte_gasto: 1,
        ID_solicitud_viatico: 1,
        ID_tipo_gasto: 3,
        ID_status_reporte_gasto: 3,
        concepto: 'Vuelo Redondo',
        monto: 6432.17,
        fecha: new Date('2023-04-16 00:00:00'),
        imagen: 'imagen.url',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_reporte_gasto: 2,
        ID_solicitud_viatico: 1,
        ID_tipo_gasto: 2,
        ID_status_reporte_gasto: 2,
        concepto: 'Hotel California',
        monto: 4799,
        fecha: new Date('2023-04-18 00:00:00'),
        imagen: 'imagen.url',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_reporte_gasto: 3,
        ID_solicitud_viatico: 1,
        ID_tipo_gasto: 1,
        ID_status_reporte_gasto: 1,
        concepto: 'Cena Mochomos',
        monto: 530,
        fecha: new Date('2023-04-18 00:00:00'),
        imagen: 'imagen.url',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_reporte_gasto: 4,
        ID_solicitud_viatico: 2,
        ID_tipo_gasto: 4,
        ID_status_reporte_gasto: 4,
        concepto: 'Xbox',
        monto: 5500,
        fecha: new Date('2023-04-19 00:00:00'),
        imagen: 'imagen.url',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReporteGastos', null, {});
  }
};
