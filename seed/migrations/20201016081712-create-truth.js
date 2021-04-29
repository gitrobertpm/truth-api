"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Truths", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
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
    // await queryInterface.addColumn("Truths", "userId", Sequelize.INTEGER);
    await queryInterface.describeTable("Truths")
    .then(tableDefinition => {
      if (tableDefinition.userId) return Promise.resolve();

      return queryInterface.addColumn(
        "Truths",
        "userId",
        { type: Sequelize.INTEGER } // or a different column
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Truths");
  }
};