'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SolicitudViaticos', [
      {
        ID_solicitud_viatico: 1,
        ID_empleado: 1,
        ID_status_solicitud_viaticos: 2,
        ID_proyecto: 1,
        monto: 13550,
        fechaEnvioSolicitud: new Date('2023-04-12 11:11:11'),
        fechaAprobado: new Date('2023-04-25 14:06:52'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_solicitud_viatico: 2,
        ID_empleado: 4,
        ID_status_solicitud_viaticos: 3,
        ID_proyecto: 1,
        monto: 6000,
        fechaEnvioSolicitud: new Date('2023-04-18 15:03:48'),
        fechaAprobado: new Date('2023-04-20 09:32:21'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SolicitudViaticos', null, {});
  }
};
