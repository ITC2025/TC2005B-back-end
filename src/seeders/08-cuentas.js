'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cuentas', [
      {
        ID_cuenta: 1,
        ID_empleado: 1,
        saldo: 4799,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_cuenta: 2,
        ID_empleado: 2,
        saldo: -6000,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cuentas', null, {});
  }
};
