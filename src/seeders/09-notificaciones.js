'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Notificaciones', [
      {
        ID_notificacion: 1,
        ID_empleado: 1,
        descripcion: 'Se ha aprovado su solicitud de viaticos con id: 48.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Notificaciones', null, {});
  }
};
