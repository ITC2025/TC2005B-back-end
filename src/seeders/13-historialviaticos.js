'use strict';

const { DATE } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HistorialViaticos', [
      {
        ID_historico_viatico: 1,
        ID_solicitud_viaticos: 1,
        ID_status_solicitud_viaticos: 1,
        fechaModificacion: new Date('2023-04-11 08:31:07'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_viatico: 2,
        ID_solicitud_viaticos: 1,
        ID_status_solicitud_viaticos: 2,
        fechaModificacion: new Date('2023-04-12 11:11:11'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_historico_viatico: 3,
        ID_solicitud_viaticos: 1,
        ID_status_solicitud_viaticos: 3,
        fechaModificacion: new Date('2023-04-15 14:06:52'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HistorialViaticos', null, {});
  }
};
