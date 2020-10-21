const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const { asyncHandler, authenticateUser } = require('./helpers');
const { User, Truth, Vote } = require('../models');
const e = require('express');


const getVotesSchema = (userOrTruth, id) => {
  return { 
    where: {
      [userOrTruth]: id
    },
    attributes: { 
      exclude: ['createdAt', 'updatedAt'],
    },
    include: [{
      model: User,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'password'],
      },
      as: 'voter',
    },
    {
      model: Truth,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      as: 'truthVotedOn',
    }]
  };
}


/* Get support and challenge votes in route handlers below */
// const supportVotes = votes.filter(vote => vote.vote);
// const challengeVotes = votes.filter(vote => !vote.vote);


/* GET Truth Votes */
router.get('/truth/:id', asyncHandler( async (req, res, next) => {
  const id = req.params.id;
  console.log(`Getting truth ${id} votes`.cyan);
  const votes = await Vote.findAll(getVotesSchema('truthId', id));

  // If Truth has Votes, return them, else pass error to global error handler
  if (votes) {
    console.log(`Retrieved truth ${id} votes`.green);
    res.status(200).json(votes);
  } else {
    const err = new Error('That truth has no votes.');
    err.status = 404;
    next(err);
  }
}));


/* GET User Votes */
router.get('/user/:id', asyncHandler( async (req, res, next) => {
  const id = req.params.id;
  console.log(`Getting user ${id} votes`.cyan);
  const votes = await Vote.findAll(getVotesSchema('userId', id));

  // If Truth has Votes, return them, else pass error to global error handler
  if (votes) {
    console.log(`Retrieved user ${id} votes`.green);
    res.status(200).json(votes);
  } else {
    const err = new Error('That user has no votes.');
    err.status = 404;
    next(err);
  }
}));


/* POST Votes */
router.post('/truth/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const id = req.params.id;
  const body = req.body;

  // Set new Truth's userId property
  body.userId = authenticatedUser.id;
  body.truthId = id;

  // Check if User has already voted on Truth
  const alreadyVoted = await Vote.findAll({ where: {'userId': authenticatedUser.id, truthId: id} });

  if (!alreadyVoted) {
    if (body) console.log(`Creating new ${body.vote} vote on truth ${id}`.cyan);
    const vote = await Vote.create(body);
    if (vote) console.log(`Created new ${body.vote} vote on truth ${id}`.green);
    res.status(201).location(`/api/truths/${id}`).end();
  } else {
    console.log(`User ${authenticatedUser.id} already voted on truth ${id}`.red);
    const err = new Error(`Conflict: User ${authenticatedUser.id} already voted on truth ${id}.`);
    err.status = 409;
    next(err);
  }
}));


/* PUT Votes */
router.put('/truth/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const id = req.params.id;
  const body = req.body;
  console.log(`Getting truth ${id} vote to update`.cyan);

  // Handle null req.body
  if (!Object.keys(body).length) {
    const err = new Error();
    err.name = 'SequelizeValidationError';
    err.status = 400;
    err.errors = [{message: `A vote must actually be submitted.`}];
    next(err);
  }

  // Handle empty values
  if (typeof body.vote !== 'boolean') {
    const err = new Error();
    err.name = 'SequelizeValidationError';
    err.status = 400;
    err.errors = [{message: `Vote must be either true or false.`}];
    next(err);
  }

  // If Truth exists, update it, else pass error to global error handler
  const vote = await Vote.findOne({ where: {'userId': authenticatedUser.id, truthId: id} });
  
  if (vote) {

    // If authed user owns vote, update it, else pass 403 error to global error handler
    if (authenticatedUser.id === vote.userId) {
      await vote.update( { ...body } );
      console.log(`Updated vote on truth ${id}`.green);
      res.status(204).end();
    } else {
      const err = new Error('The vote you are trying to update does not belong to you.');
      err.status = 403;
      next(err);
    }

  } else {
    const err = new Error(`You haven't voted on that truth yet.`);
    err.status = 404;
    next(err);
  }
}));

module.exports = router;