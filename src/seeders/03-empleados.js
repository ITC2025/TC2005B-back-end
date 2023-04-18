'use strict';

//const { Roles } = require('../models/roles');
//const { Oficinas } = require('../models/oficinas');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //let roles = await Roles.findAll();
    //let oficinas = await Oficinas.findAll();
    
    await queryInterface.bulkInsert('Empleados', [
      {
        ID_empleado: 1,
        ID_rol: 1,
        ID_oficina: 1,
        name: 'Jose',
        apellido: 'Perez',
        telefono: 6621234567,
        correoElectronico: 'joseperez@gmail.com',
        password: 'Jose1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_empleado: 2,
        ID_rol: 2,
        ID_oficina: 1,
        name: 'Carlos',
        apellido: 'Islas',
        telefono: 6448402814,
        correoElectronico: 'carlosislas@hotmail.com',
        password: 'Carlos1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_empleado: 3,
        ID_rol: 3,
        ID_oficina: 2,
        name: 'Ivan',
        apellido: 'Martinez',
        telefono: 5584610040,
        correoElectronico: 'ivan_martinez@gmail.com',
        password: 'Ivan1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ID_empleado: 4,
        ID_rol: 1,
        ID_oficina: 1,
        name: 'Julia',
        apellido: 'Sanchez',
        telefono: 6622038461,
        correoElectronico: 'JULIA.sanchez@yahoo.com.mx',
        password: 'Julia1234',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empleados', null, {});
  }
};
