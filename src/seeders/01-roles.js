'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        ID_rol: 1,
        descripcion: 'Empleado',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        ID_rol: 2,
        descripcion: 'Project Manager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_rol: 3,
        descripcion: 'Administrativo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_rol: 4,
        descripcion: 'SysAdmin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
