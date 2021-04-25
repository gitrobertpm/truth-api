'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Truths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      truth: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true
      },
      argument: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.STRING
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
    // await queryInterface.addColumn('Truths', 'userId', Sequelize.INTEGER);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Truths');
  }
};