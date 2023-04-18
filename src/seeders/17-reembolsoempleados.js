'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReembolsoEmpleados', [
      {
        ID_reembolso_empleados: 1,
        ID_cuenta: 1,
        ID_status_reembolso: 2,
        monto: 4799,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReembolsoEmpleados', null, {});
  }
};
