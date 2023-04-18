'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HistorialViaticos', {
      ID_historico_viatico: {
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
            key: 'ID_solicitud_viaticos'
          }
      },
      ID_status_solicitud_viatico:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'StatusSolicitudViaticos',
            key: 'ID_status_solicitud_viaticos'
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
    await queryInterface.dropTable('HistorialViaticos');
  }
};