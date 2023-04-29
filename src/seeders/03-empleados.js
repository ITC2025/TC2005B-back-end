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
        password: '$2b$10$6Hr3FXWElg4fjBXg3aMqD.v5BjajUrapXcxP3n4d7kHbyTnh5S1Ai',
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
        password: '$2b$10$qJdB7VMcsryEVc54IqFBOeOJNZA87XxilVvj7xVWBVxYy7HfnQiPC',
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
        password: '$2b$10$tiquXcTpFEzBsJ/gfbfXgeI5dKGkNMLcaBqPU.8AwscJUmUYcYVGm',
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
        password: '$2b$10$wtdIVVqa5XoR0Tns59LVeuuQ0daptsj5cmqoEtQ3miEWvBcS2/U1K',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Empleados', null, {});
  }
};
