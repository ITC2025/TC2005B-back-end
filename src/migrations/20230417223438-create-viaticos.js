'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Viaticos', {
      ID_viatico: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_solicitud_viatico:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'SolicitudViaticos',
            key: 'ID_solicitud_viatico'
          }
      },
      concepto: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Viaticos');
  }
};