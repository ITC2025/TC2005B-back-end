'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TipoGastos', [
      {
        ID_tipo_gasto: 1,
        descripcion: 'Comida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_tipo_gasto: 2,
        descripcion: 'Hospedaje',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_tipo_gasto: 3,
        descripcion: 'Transporte',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_tipo_gasto: 4,
        descripcion: 'Personal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_tipo_gasto: 5,
        descripcion: 'Materiales',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_tipo_gasto: 6,
        descripcion: 'Otros',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TipoGastos', null, {});
  }
};
