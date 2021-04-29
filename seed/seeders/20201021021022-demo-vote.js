'use strict';

const { users, truths, votes } = require('../uuids');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Votes', [
      {
        id: votes[0],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0],
        truthId: truths[0]
      },
      {
        id: votes[1],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0],
        truthId: truths[3]
      },
      {
        id: votes[2],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0],
        truthId: truths[4]
      },
      {
        id: votes[3],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0],
        truthId: truths[5]
      },
      {
        id: votes[4],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0],
        truthId: truths[8]
      },
      {
        id: votes[5],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[1],
        truthId: truths[1]
      },
      {
        id: votes[6],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[1],
        truthId: truths[9]
      },
      {
        id: votes[7],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[2],
        truthId: truths[0]
      },
      {
        id: votes[8],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[2],
        truthId: truths[4]
      },
      {
        id: votes[9],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[2],
        truthId: truths[10]
      },
      {
        id: votes[10],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3],
        truthId: truths[0]
      },
      {
        id: votes[11],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3],
        truthId: truths[2]
      },
      {
        id: votes[12],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3],
        truthId: truths[5]
      },
      {
        id: votes[13],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3],
        truthId: truths[7]
      },
      {
        id: votes[14],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3],
        truthId: truths[9]
      },
      {
        id: votes[15],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[4],
        truthId: truths[0]
      },
      {
        id: votes[16],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[4],
        truthId: truths[3]
      },
      {
        id: votes[17],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[4],
        truthId: truths[4]
      },
      {
        id: votes[18],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[4],
        truthId: truths[8]
      },
      {
        id: votes[19],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[5],
        truthId: truths[1]
      },
      {
        id: votes[20],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[5],
        truthId: truths[9]
      },
      {
        id: votes[21],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[6],
        truthId: truths[0]
      },
      {
        id: votes[22],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[6],
        truthId: truths[3]
      },
      {
        id: votes[23],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[6],
        truthId: truths[5]
      },
      {
        id: votes[24],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7],
        truthId: truths[2]
      },
      {
        id: votes[25],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7],
        truthId: truths[3]
      },
      {
        id: votes[26],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7],
        truthId: truths[6]
      },
      {
        id: votes[27],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7],
        truthId: truths[8]
      },
      {
        id: votes[28],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7],
        truthId: truths[8]
      },
      {
        id: votes[29],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[0]
      },
      {
        id: votes[30],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[2]
      },
      {
        id: votes[31],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[6]
      },
      {
        id: votes[32],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[7]
      },
      {
        id: votes[33],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[9]
      },
      {
        id: votes[34],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8],
        truthId: truths[10]
      },
      {
        id: votes[35],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[0]
      },
      {
        id: votes[36],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[4]
      },
      {
        id: votes[37],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[5]
      },
      {
        id: votes[38],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[6]
      },
      {
        id: votes[39],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[8]
      },
      {
        id: votes[40],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9],
        truthId: truths[10]
      },
      {
        id: votes[41],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[10],
        truthId: truths[2]
      },
      {
        id: votes[42],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[10],
        truthId: truths[6]
      },
      {
        id: votes[43],
        vote: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[10],
        truthId: truths[9]
      },
      {
        id: votes[44],
        vote: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[10],
        truthId: truths[9]
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Votes', null, {});
  }
};
