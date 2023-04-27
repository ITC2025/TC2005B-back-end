'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SolicitudViaticos', {
      ID_solicitud_viatico: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_empleado:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'Empleados',
            key: 'ID_empleado'
          }
      },
      ID_status_solicitud_viaticos:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'StatusSolicitudViaticos',
            key: 'ID_status_solicitud_viaticos'
          }
      },
      ID_proyecto:{
        type : Sequelize.INTEGER,
          allowNull: false,
          references: {        
            model: 'Proyectos',
            key: 'ID_proyecto'
          }
      },
      monto: {
        type: Sequelize.DECIMAL
      },
      descripcion: {
        type: Sequelize.STRING
      },
      destino: {
        type: Sequelize.STRING
      },
      fechaInicio: {
        type: Sequelize.DATEONLY
      },
      fechaTermino: {
        type: Sequelize.DATEONLY
      },
      fechaEnvioSolicitud: {
        type: Sequelize.DATE
      },
      fechaAprobado: {
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
    await queryInterface.dropTable('SolicitudViaticos');
  }
};