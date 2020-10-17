'use strict';

const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        "id": 1,
        userName: "Luke Skywalker",
        emailAddress: 'luke@skywalker.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "id": 2,
        userName: "Han Solo",
        emailAddress: 'han@solo.com',
        password: bcryptjs.hashSync('pass'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {})
  }
};
