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
        ID_status_reporte_gasto: 4,
        concepto: 'Vuelo Redondo',
        monto: 6432.17,
        fecha: new Date('2023-04-16'),
        imagen: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Freceipt1.png?alt=media&token=b21423f2-e298-4344-99ba-dde2c9e7aafa',
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
        fecha: new Date('2023-04-18'),
        imagen: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Freceipt2.png?alt=media&token=78c03d47-b78c-421e-b2d0-0024c0525913',
        factura: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Ffactura.pdf?alt=media&token=3de49554-66c0-4b7b-b859-2d0c9e03b91a',
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
        fecha: new Date('2023-04-18'),
        imagen: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Freceipt3.png?alt=media&token=68016a71-8b60-41d7-b693-56be41fc5c08',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_reporte_gasto: 4,
        ID_solicitud_viatico: 1,
        ID_tipo_gasto: 1,
        ID_status_reporte_gasto: 3,
        concepto: 'Chocolate',
        monto: 25,
        fecha: new Date('2023-04-18'),
        imagen: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Freceipt4.png?alt=media&token=0f1ba8b5-0d70-44fe-84b9-ef99fe68dc12',
        factura: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Ffactura.pdf?alt=media&token=3de49554-66c0-4b7b-b859-2d0c9e03b91a',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_reporte_gasto: 5,
        ID_solicitud_viatico: 2,
        ID_tipo_gasto: 4,
        ID_status_reporte_gasto: 5,
        concepto: 'Xbox',
        monto: 5500,
        fecha: new Date('2023-04-19 00:00:00'),
        imagen: 'https://firebasestorage.googleapis.com/v0/b/schaeferfilestorage.appspot.com/o/data%2Freporte_gastos%2Freceipt5.png?alt=media&token=68480d5e-c767-48ed-8257-9713c150e691',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReporteGastos', null, {});
  }
};
