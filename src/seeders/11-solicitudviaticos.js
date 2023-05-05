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
      },
      {
        ID_solicitud_viatico: 3,
        ID_empleado: 1,
        ID_status_solicitud_viaticos: 1,
        ID_proyecto: 1,
        monto: 5000,
        descripcion: "No lo se, No me han dicho",
        destino: "Hermosillo, Sonora",
        fechaInicio: new Date('2023-04-26'),
        fechaTermino: new Date('2023-05-01'),
        fechaEnvioSolicitud: new Date('2023-04-18 15:03:48'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_solicitud_viatico: 4,
        ID_empleado: 1,
        ID_status_solicitud_viaticos: 5,
        ID_proyecto: 3,
        monto: 1000000000,
        descripcion: "Robar la luna",
        destino: "La luna, sistema solar",
        fechaInicio: new Date('2023-04-26'),
        fechaTermino: new Date('2023-05-01'),
        fechaEnvioSolicitud: new Date('2023-04-18 15:03:48'),
        fechaAprobado: new Date('2023-04-20 09:32:21'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_solicitud_viatico: 5,
        ID_empleado: 4,
        ID_status_solicitud_viaticos: 4,
        ID_proyecto: 2,
        monto: 10000,
        descripcion: "Viaje a Alaska",
        destino: "Juneau, Alaska",
        fechaInicio: new Date('2023-04-26'),
        fechaTermino: new Date('2023-05-01'),
        fechaEnvioSolicitud: new Date('2023-04-18 15:03:48'),
        fechaAprobado: new Date('2023-04-20 09:32:21'),
        referenciaBancariaSolicitud: "123456789012",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_solicitud_viatico: 6,
        ID_empleado: 1,
        ID_status_solicitud_viaticos: 6,
        ID_proyecto: 1,
        monto: 999999999,
        descripcion: "Vacaciones",
        destino: "San Carlos, Sonora",
        fechaInicio: new Date('2023-05-06'),
        fechaTermino: new Date('2023-05-08'),
        fechaEnvioSolicitud: new Date('2023-05-01 13:03:48'),
        motivoRechazoSolicitud: "No es un viatico justificado.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('SolicitudViaticos', null, {});
  }
};
