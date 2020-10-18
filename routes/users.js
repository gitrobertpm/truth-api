const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const colors = require('colors');
const { asyncHandler, authenticateUser } = require('../helpers');
const { User, Truth } = require('../models');


/* Schema for defining User data to return when responding to GET Truth requests */
const getUsersSchema = emailAddress => { 
  return {
    where: { 
      emailAddress: emailAddress
    }, 
    attributes: { 
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [{
      model: Truth,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      as: 'truthTeller',
    }]
  }
};


/* GET Authenticated User */
router.get('/', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  if (authenticatedUser) console.log(`Getting authenticated user with username: ${authenticatedUser.userName}`.cyan);
  const user = await User.findOne(getUsersSchema(authenticatedUser.emailAddress));
  console.log(`Retrieved user: ${user.userName}`.green);
  res.status(200).json(user);
}));


/* POST new User */
router.post('/', asyncHandler( async (req, res, next) => {
  const body = req.body;
  if (body) console.log(`Creating new user: ${body.userName}`.cyan);
  if(body.password) body.password = bcryptjs.hashSync(body.password);
  const user = await User.create(body);
  console.log(`Created User: ${user}`.green);
  res.status(201).location('/').end();
}));

module.exports = router;
