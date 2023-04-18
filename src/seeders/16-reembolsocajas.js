'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReembolsoCajas', [
      {
        ID_reembolso_cajas: 1,
        ID_cuenta: 2,
        ID_status_reembolso: 1,
        monto: 6000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReembolsoCajas', null, {});
  }
};
