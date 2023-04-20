'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ReporteGastos', {
      ID_reporte_gasto: {
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
      ID_tipo_gasto:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'TipoGastos',
            key: 'ID_tipo_gasto'
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
      concepto: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.DECIMAL
      },
      fecha: {
        type: Sequelize.DATE
      },
      imagen: {
        type: Sequelize.BLOB
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
    await queryInterface.dropTable('ReporteGastos');
  }
};