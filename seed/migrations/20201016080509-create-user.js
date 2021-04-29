"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      emailAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.TEXT
      },
      bonafides: {
        type: Sequelize.STRING
      },
      social: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.STRING
      },
      settings: {
        type: Sequelize.TEXT
      },
      flags: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  }
};