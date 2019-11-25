'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {   
    return queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      id_product_company: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      porcentagem: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      file_img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {    
    return queryInterface.dropTable('products');
  }
};
