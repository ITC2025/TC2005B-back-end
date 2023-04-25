'use strict';

const { DATEONLY } = require('sequelize');

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
        descripcion: "Junta con cliente",
        destino: "Guadalajara, México",
        fechaInicio: new Date('2023-04-18'),
        fechaTermino: new Date('2023-04-22'),
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
        descripcion: "Viaje a fábrica",
        destino: "Wels, Austria",
        fechaInicio: new Date('2023-04-26'),
        fechaTermino: new Date('2023-05-01'),
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
