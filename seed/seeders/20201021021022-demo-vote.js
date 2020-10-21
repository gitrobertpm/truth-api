'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Votes', [
      {
        id: 1,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 2
      },
      {
        id: 2,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 1
      },
      {
        id: 3,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 2
      },
      {
        id: 4,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 5
      },
      {
        id: 5,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 5
      },
      {
        id: 6,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 1
      },
      {
        id: 7,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 5
      },
      {
        id: 8,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 4
      },
      {
        id: 9,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 1
      },
      {
        id: 10,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 4
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Votes', null, {});
  }
};
