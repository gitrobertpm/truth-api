"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Votes", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      vote: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    // await queryInterface.addColumn("Votes", "userId", Sequelize.INTEGER);
    // await queryInterface.addColumn("Votes", "truthId", Sequelize.INTEGER);

    await queryInterface.describeTable("Votes")
    .then(tableDefinition => {
      if (tableDefinition.userId) return Promise.resolve();

      return queryInterface.addColumn(
        "Votes",
        "userId",
        { type: Sequelize.INTEGER } // or a different column
      );
    });

    await queryInterface.describeTable("Votes")
    .then(tableDefinition => {
      if (tableDefinition.truthId) return Promise.resolve();

      return queryInterface.addColumn(
        "Votes",
        "truthId",
        { type: Sequelize.INTEGER } // or a different column
      );
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Votes");
  }
};