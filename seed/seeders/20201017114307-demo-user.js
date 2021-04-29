'use strict';

const { users } = require('../uuids');
const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: users[0],
        userName: 'Luke Skywalker',
        emailAddress: 'luke@skywalker.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[1],
        userName: 'Han Solo',
        emailAddress: 'han@solo.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[2],
        userName: 'Mark Twain',
        emailAddress: 'mark@twain.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[3],
        userName: 'Albert Einstein',
        emailAddress: 'albert@einstein.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[4],
        userName: 'Winnie The Pooh',
        emailAddress: 'winnie@thepooh.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[5],
        userName: 'Chuang Tzu',
        emailAddress: 'chang@tzu.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[6],
        userName: 'Maya Angelou',
        emailAddress: 'maya@angelou.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[7],
        userName: 'Helen Keller',
        emailAddress: 'helen@keller.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[8],
        userName: 'Socrates',
        emailAddress: 'so@crates.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[9],
        userName: 'Eleanore Roosevelt',
        emailAddress: 'eleanore@roosevelt.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: users[10],
        userName: 'Joe Walsh',
        emailAddress: 'joe@walsh.com',
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
