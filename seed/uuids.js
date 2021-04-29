'use strict';

const { v4: uuidv4 } = require('uuid');

const uuids = {
  users: [],
  truths: [],
  votes: []
}

for (let i = 0, j = 11; i < j; i++) {
  uuids.users.push(uuidv4());
}

for (let i = 0, j = 11; i < j; i++) {
  uuids.truths.push(uuidv4());
}

for (let i = 0, j = 50; i < j; i++) {
  uuids.votes.push(uuidv4());
}

module.exports = uuids;