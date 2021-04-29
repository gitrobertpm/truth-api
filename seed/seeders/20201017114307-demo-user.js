'use strict';

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: "00000000-0000-0000-0000-000000000001",
        userName: 'Luke Skywalker',
        emailAddress: 'luke@skywalker.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000002",
        userName: 'Han Solo',
        emailAddress: 'han@solo.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000003",
        userName: 'Mark Twain',
        emailAddress: 'mark@twain.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000004",
        userName: 'Albert Einstein',
        emailAddress: 'albert@einstein.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000005",
        userName: 'Winnie The Pooh',
        emailAddress: 'winnie@thepooh.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000006",
        userName: 'Chuang Tzu',
        emailAddress: 'chang@tzu.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000007",
        userName: 'Maya Angelou',
        emailAddress: 'maya@angelou.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000008",
        userName: 'Helen Keller',
        emailAddress: 'helen@keller.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000009",
        userName: 'Socrates',
        emailAddress: 'so@crates.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000010",
        userName: 'Eleanore Roosevelt',
        emailAddress: 'eleanore@roosevelt.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: "00000000-0000-0000-0000-000000000011",
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
