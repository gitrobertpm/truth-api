const express = require('express');
const router = express.Router();
const colors = require('colors');
const { asyncHandler, authenticateUser } = require('./helpers');
const { User, Truth, Vote } = require('../models');


/* POST Votes */
router.post('/', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser; //console.log(req.body);
  const data = req.body;
  const truthId = req.body.truthId;

  // Set new Truth's userId property
  data.userId = authenticatedUser.id;

  // Check if User has already voted on Truth
  const alreadyVoted = await Vote.findAll({ where: {'userId': authenticatedUser.id, truthId: truthId} });
  if (!alreadyVoted.length) {
    if (data) console.log(`Creating new ${data.vote} vote on truth ${truthId}`.cyan);

    // Creating vote
    const vote = await Vote.create(data); //console.log(vote);

    // Add vote id to data object
    data.id = vote.id;
    if (vote) console.log(`Created new ${data.vote} vote on truth ${truthId}`.green);

    // Get vote totals
    const supportVotes = await Vote.count({ where: {vote: true, truthId: truthId}});
    const challengeVotes = await Vote.count({ where: {vote: false, truthId: truthId}});
    res.status(201).location(`/api/truths/${truthId}`).json({success: 'success', data, supportVotes, challengeVotes, vote});
  } else {
    console.log(`User ${authenticatedUser.id} already voted on truth ${truthId}`.red);
    const err = new Error();
    err.errors = [{message: `Conflict: User ${authenticatedUser.userName} already voted on truth ${truthId}.`}];
    err.status = 409;
    next(err);
  }
}));


/* PUT Votes */
router.put('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser; //console.log(req.body);
  const data = req.body;
  const truthId = req.body.truthId;
  const voteId = req.params.id;

  // Set new Truth's userId property
  data.userId = authenticatedUser.id;

  // Finding vote
  const vote = await Vote.findByPk(voteId);

  // Add vote id to data object
  data.id = vote.id;

  if (vote) console.log(`Updating vote for truth ${truthId}`.cyan);
  if (vote.userId === authenticatedUser.id) {

    // Updating Vote
    await vote.update( { ...data } );
    console.log(`Vote for truth ${truthId} has been updated to ${data.vote}`.cyan);

    // Get vote totals
    const supportVotes = await Vote.count({ where: {vote: true, truthId: vote.truthId}});
    const challengeVotes = await Vote.count({ where: {vote: false, truthId: vote.truthId}});
    res.status(200).json({success: 'success', data, supportVotes, challengeVotes, vote});
  } else {
    const err = new Error();
    err.status = 403;
    err.errors = [{message: 'The vote you are trying to update does not belong to you.'}]
    next(err);
  }
}));


/* DELETE Votes */
router.delete('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const voteId = req.params.id;

  // Finding Vote
  const vote = await Vote.findByPk(voteId);
  if (vote) console.log(`Deleting vote ${vote.id}`.cyan);
  if (vote.userId === authenticatedUser.id) {

    // Deleting vote
    await vote.destroy();
    console.log(`Vote ${vote.id} deleted`.cyan);

    // Get vote totals
    const supportVotes = await Vote.count({ where: {vote: true, truthId: vote.truthId}});
    const challengeVotes = await Vote.count({ where: {vote: false, truthId: vote.truthId}});
    res.status(200).json({success: 'success', supportVotes, challengeVotes});
  } else {
    const err = new Error();
    err.status = 403;
    err.errors = [{message: 'The vote you are trying to delete does not belong to you.'}]
    next(err);
  }
}));

/* Commented code below for getting support and challenge votes */

// const getVotesSchema = (userOrTruth, id) => {
//   return { 
//     where: {
//       [userOrTruth]: id
//     },
//     attributes: { 
//       exclude: ['createdAt', 'updatedAt'],
//     },
//     include: [{
//       model: User,
//       attributes: {
//         exclude: ['createdAt', 'updatedAt', 'password'],
//       },
//       as: 'voter',
//     },
//     {
//       model: Truth,
//       attributes: {
//         exclude: ['createdAt', 'updatedAt'],
//       },
//       as: 'truthVotedOn',
//     }]
//   };
// }

// const supportVotes = votes.filter(vote => vote.vote);
// const challengeVotes = votes.filter(vote => !vote.vote);


// /* GET Truth Votes */
// router.get('/votes/:id', asyncHandler( async (req, res, next) => {
//   const id = req.params.id;
//   console.log(`Getting truth ${id} votes`.cyan);
//   const votes = await Vote.findAll(getVotesSchema('truthId', id));

//   // If Truth has Votes, return them, else pass error to global error handler
//   if (votes) {
//     console.log(`Retrieved truth ${id} votes`.green);
//     res.status(200).json(votes);
//   } else {
//     const err = new Error('That truth has no votes.');
//     err.status = 404;
//     next(err);
//   }
// }));


// /* GET User Votes */
// router.get('/votes/:id', asyncHandler( async (req, res, next) => {
//   const id = req.params.id;
//   console.log(`Getting user ${id} votes`.cyan);
//   const votes = await Vote.findAll(getVotesSchema('userId', id));

//   // If Truth has Votes, return them, else pass error to global error handler
//   if (votes) {
//     console.log(`Retrieved user ${id} votes`.green);
//     res.status(200).json(votes);
//   } else {
//     const err = new Error('That user has no votes.');
//     err.status = 404;
//     next(err);
//   }
// }));

module.exports = router;