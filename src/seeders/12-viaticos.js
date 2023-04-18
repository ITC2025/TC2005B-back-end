'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Viaticos', [
      {
        ID_viatico: 1,
        ID_solicitud_viatico: 1,
        concepto: 'Hotel California',
        monto: 4800,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_viatico: 2,
        ID_solicitud_viatico: 1,
        concepto: 'Avion redondo',
        monto: 6400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_viatico: 3,
        ID_solicitud_viatico: 1,
        concepto: 'Comidas',
        monto: 2350,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Viaticos', null, {});
  }
};
