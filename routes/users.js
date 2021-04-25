const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const colors = require('colors');
const { asyncHandler, authenticateUser } = require('./helpers');
const { User, Truth, Vote } = require('../models');
const e = require('express');


/* Schema for defining User data to return when responding to GET Truth requests */
const getUsersSchema = emailAddress => { 
  return {
    where: { 
      emailAddress: emailAddress
    }, 
    attributes: { 
      exclude: ['createdAt', 'updatedAt', 'password'],
    },
    include: [{
      model: Truth,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      as: 'usersTruths',
    },
    {
      model: Vote,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [{
        model: Truth,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
        as: 'truthVotedOn'
      }],
      as: 'usersVotes',
    }]
  }
};


/* GET Authenticated User */
router.get('/', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser; // console.log(authenticatedUser);
  if (authenticatedUser) console.log(`Getting authenticated user with username: ${authenticatedUser.userName}`.cyan);
  const user = await User.findOne(getUsersSchema(authenticatedUser.emailAddress));
  console.log(`Retrieved user: ${user.userName}`.green);
  res.status(200).json(user);
}));


/* GET All Users for admin */
router.get('/all', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser; //console.log('AUTH USER', authenticatedUser);
  if (authenticatedUser) console.log(`Getting authenticated user with username: ${authenticatedUser.userName}`.cyan);

  if (authenticatedUser.rank.includes('admin')) {
    const users = await User.findAll();
    console.log(`Retrieved users`.green);
    res.status(200).json(users);
  } else {
    const err = new Error();
    err.status = 403;
    err.errors = [{message: `You're not authorized to retrieve that information.`}];
    next(err);
  }
}));


/* POST new User */
router.post('/', asyncHandler( async (req, res, next) => {
  const body = req.body;
  if (body) console.log(`Creating new user: ${body.userName}`.cyan);
  if(body.password) body.password = bcryptjs.hashSync(body.password);

  if (body.userName === 'robertpm' && body.emailAddress === 'robertpm@robertpm.com') {
    body.rank = 'owner, admin';
  }

  const user = await User.create(body);
  console.log(`Created User: ${user}`.green);
  res.status(201).location('/').json({success: 'success'});
}));

/* DELETE User */
router.delete('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const userId = req.params.id;

  const user = await User.findByPk(userId);

  if (user) {
    if (authenticatedUser.rank.includes('admin')) {
      console.log(`Retrieved user: ${user.userName}`.green);
      await user.destroy();
      console.log(`Deleted user: ${user.userName}`.green);
      res.status(200).json({success: 'success'});
    } else {
      const err = new Error();
      err.status = 409;
      err.errors = [{message: 'You are not authorized to delete a user.'}]
      next(err);
    }
  } else {
    const err = new Error();
    err.status = 404;
    err.errors = [{message: 'User not found.'}]
    next(err);
  }  
}));

module.exports = router;
