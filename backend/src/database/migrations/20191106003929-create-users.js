/*  USER TABLE SCHEMA */
  "use strict";

  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("users", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },        
        telefone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        saldo: {
          type: Sequelize.FLOAT,
          allowNull: false
        },
        password_hash: {
          type: Sequelize.STRING,
          allowNull: false
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
      return queryInterface.dropTable("users");
    }
  };
