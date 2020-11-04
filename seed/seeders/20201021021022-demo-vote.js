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
        truthId: 1
      },
      {
        id: 2,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 4
      },
      {
        id: 3,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 5
      },
      {
        id: 4,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 6
      },
      {
        id: 5,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 9
      },
      {
        id: 6,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 2
      },
      {
        id: 7,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        truthId: 10
      },
      {
        id: 8,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 1
      },
      {
        id: 9,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 5
      },
      {
        id: 10,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        truthId: 11
      },
      {
        id: 11,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 1
      },
      {
        id: 12,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 3
      },
      {
        id: 13,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 6
      },
      {
        id: 14,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 8
      },
      {
        id: 15,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        truthId: 10
      },
      {
        id: 16,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 1
      },
      {
        id: 17,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 4
      },
      {
        id: 18,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 5
      },
      {
        id: 19,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 9
      },
      {
        id: 20,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 2
      },
      {
        id: 21,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4,
        truthId: 10
      },
      {
        id: 22,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        truthId: 1
      },
      {
        id: 23,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        truthId: 4
      },
      {
        id: 24,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6,
        truthId: 6
      },
      {
        id: 25,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        truthId: 3
      },
      {
        id: 26,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        truthId: 4
      },
      {
        id: 27,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        truthId: 7
      },
      {
        id: 28,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        truthId: 9
      },
      {
        id: 29,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7,
        truthId: 10
      },
      {
        id: 30,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 1
      },
      {
        id: 31,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 3
      },
      {
        id: 32,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 7
      },
      {
        id: 33,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 8
      },
      {
        id: 34,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 10
      },
      {
        id: 35,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8,
        truthId: 11
      },
      {
        id: 36,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 1
      },
      {
        id: 37,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 5
      },
      {
        id: 38,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 6
      },
      {
        id: 39,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 7
      },
      {
        id: 40,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 9
      },
      {
        id: 41,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9,
        truthId: 11
      },
      {
        id: 42,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10,
        truthId: 3
      },
      {
        id: 43,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10,
        truthId: 7
      },
      {
        id: 44,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10,
        truthId: 10
      },
      {
        id: 45,
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10,
        truthId: 11
      },
      {
        id: 46,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11,
        truthId: 1
      },
      {
        id: 47,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11,
        truthId: 2
      },
      {
        id: 48,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11,
        truthId: 5
      },
      {
        id: 49,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11,
        truthId: 6
      },
      {
        id: 50,
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11,
        truthId: 11
      },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Votes', null, {});
  }
};
