'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carts', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      id_hash:{
        type: Sequelize.STRING,
        allowNull: true, 
      },
      id_user:{
        type: Sequelize.STRING,
        allowNull: true,        
      },
      id_product:{
        type: Sequelize.STRING,
        allowNull: true,        
      },
      valor:{
        type: Sequelize.FLOAT,
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
    return queryInterface.dropTable('carts');
  }
};
