'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistorialGastos', {
      ID_historico_gasto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_reporte_gasto:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'ReporteGastos',
            key: 'ID_reporte_gasto'
          }
      },
      ID_status_reporte_gasto:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'StatusReporteGastos',
            key: 'ID_status_reporte_gasto'
          }
      },
      fechaModificacion: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('HistorialGastos');
  }
};