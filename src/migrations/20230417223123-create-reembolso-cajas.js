'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReembolsoCajas', {
      ID_reembolso_cajas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_cuenta:{
        type : Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'Cuentas',
          key: 'ID_cuenta'
        }
      },
      ID_status_reembolso:{
        type : Sequelize.INTEGER,
        allowNull: false,
        references: {        
          model: 'StatusReembolsos',
          key: 'ID_status_reembolso'
        }
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
    await queryInterface.dropTable('ReembolsoCajas');
  }
};