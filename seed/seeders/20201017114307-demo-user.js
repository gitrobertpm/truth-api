'use strict';

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        userName: 'Luke Skywalker',
        emailAddress: 'luke@skywalker.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userName: 'Han Solo',
        emailAddress: 'han@solo.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        userName: 'Mark Twain',
        emailAddress: 'mark@twain.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        userName: 'Albert Einstein',
        emailAddress: 'albert@einstein.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        userName: 'Winnie The Pooh',
        emailAddress: 'winnie@thepooh.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
