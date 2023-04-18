'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Oficinas', [
      {
        ID_oficina: 1,
        nombre: 'SSI-HMO',
        ciudad: 'Hermosillo',
        estado: 'Sonora',
        cp: '83210',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_oficina: 2,
        nombre: 'SSI-MX',
        ciudad: 'Ciudad de Mexico',
        estado: 'Mexico',
        cp: '11560',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Oficinas', null, {});
  }
};
