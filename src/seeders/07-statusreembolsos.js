'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('StatusReembolsos', [
      {
        ID_status_reembolso: 1,
        descripcion: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_status_reembolso: 2,
        descripcion: 'Pagado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StatusReembolsos', null, {});
  }
};
