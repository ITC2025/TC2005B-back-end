'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusSolicitudViaticos', [
      {
        ID_status_solicitud_viaticos: 1,
        descripcion: 'Borrador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_solicitud_viaticos: 2,
        descripcion: 'Enviado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_solicitud_viaticos: 3,
        descripcion: 'Aprobado por PM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_solicitud_viaticos: 4,
        descripcion: 'Aprobado por Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_solicitud_viaticos: 5,
        descripcion: 'Rechazado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusSolicitudViaticos', null, {});
  }
};
