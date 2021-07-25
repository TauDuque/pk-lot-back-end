"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("vehicles", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      id_num: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      phone: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      time: {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      single_price: {
        type: Sequelize.DECIMAL(5, 2),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {},
};
