const express = require('express');
const router = express.Router();
const colors = require('colors');
const { asyncHandler, authenticateUser } = require('./helpers');
const { Truth, User, Vote } = require('../models');

// So we can use the operator property in sequelize
const { Op } = require("sequelize");


/* Schema for defining Truth data to return when responding to GET Truth requests */
const getTruthsSchema = { 
  attributes: { 
    exclude: ['createdAt', 'updatedAt'],
  },
  include: [{
    model: User,
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'password'],
    },
    as: 'truthsTeller',
  },
  {
    model: Vote,
    attributes: {
      exclude: ['createdAt', 'updatedAt'],
    },
    as: 'truthsVotes',
    right: true
  }]
};

// include: [{
    //   model: User,
    //   attributes: {
    //     exclude: ['createdAt', 'updatedAt', 'password']
    //   },
    //   as: 'voter'
    // }],

/* GET Truths */
router.get('/', asyncHandler( async (req, res, next) => { //throw new Error(500);
  console.log('Getting truths'.cyan);
  const truths = await Truth.findAll(getTruthsSchema);
  if (truths) console.log(`Retrieved ${truths.length} truths`.green);
  res.status(200).json(truths.reverse());
}));


/* GET Searched Truths */
router.get('/search/:query', asyncHandler( async (req, res, next) => { //throw new Error(500);
  console.log('Getting searched truths'.cyan);
  const query = req.params.query;

  // Finding all truths by username in search query
  const users = await User.findAll({where: { userName: {[Op.substring]: `%${query}%`}}}); 
  const ids = users.map(user => user.id); 

  // Searching...
  const truths = await Truth.findAll({
    where: {
      [Op.or]: {
        truth: {
          [Op.like]: `%${query}%`
        },
        argument: {
          [Op.like]: `%${query}%`
        },
        tags: {
          [Op.like]: `%${query}%`
        },
        userId: {
          [Op.in]: ids
        },
      }
    }, 
      attributes: { 
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [{
        model: User,
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'password'],
        },
        as: 'truthsTeller',
      },
      {
        model: Vote,
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: [{
          model: User,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password']
          },
          as: 'voter'
        }],
        as: 'truthsVotes',
      }]
  });

  if (truths.length) {
    console.log(`Retrieved ${truths.length} truths`.green);
    res.status(200).json(truths.reverse());
  } else {
    const err = new Error();
    err.status = 404;
    err.errors = [{message: 'The resource you requested does not appear to exist.'}];
    next(err);
  }
}));


/* GET Truth by id */
router.get('/:id', asyncHandler( async (req, res, next) => {
  const id = req.params.id;
  console.log(`Getting truth: ${id}`.cyan);
  const truth = await Truth.findByPk(id, getTruthsSchema);

  // If Truth exists, return it, else pass error to global error handler
  if (truth) {
    console.log(`Retrieved truth: ${truth.truth}`.green);
    res.status(200).json(truth);
  } else {
    const err = new Error();
    err.status = 404;
    err.errors = [{message: 'The resource you requested does not appear to exist.'}];
    next(err);
  }
}));


/* POST new Truth */
router.post('/', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const body = req.body;

  // Set new Truth's userId property
  body.userId = authenticatedUser.id;

  if (body) console.log(`Creating new Truth: ${body.truth}`.cyan);
  const truth = await Truth.create(body);
  if (truth) console.log(`Created Truth: ${truth.id}`.green);
  res.status(201).location(`/api/truths/${truth.id}`).json({success: 'success', id: truth.id});
}));


/* PUT update existing Truth */
router.put('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const id = req.params.id;
  const body = req.body;
  console.log(`Getting truth: ${id}`.cyan);

  // Handle null req.body
  if (!Object.keys(body).length) {
    const err = new Error();
    err.name = 'SequelizeValidationError';
    err.status = 400;
    err.errors = [{message: `Truth field can't be empty.`}, {message: `Argument field can't be empty.`}];
    next(err);
  }

  // Handle empty values
  if (body.truth === '' || body.argument === '') {
    const err = new Error();
    err.name = 'SequelizeValidationError';
    err.status = 400;
    err.errors = [];
    if (body.truth === '') err.errors.push({message: `Truth field can't be empty.`});
    if (body.argument === '') err.errors.push({message: `Argument field can't be empty.`});
    next(err);
  }

  // If Truth exists, update it, else pass error to global error handler
  const truth = await Truth.findByPk(id);
  
  if (truth) {

    // If authed user owns course, update it, else pass 403 error to global error handler
    if (authenticatedUser.id === truth.userId) {
      await truth.update( { ...body } );
      console.log(`Updated truth: ${id}`.green);
      res.status(200).json({success: 'success', id: truth.id});
    } else {
      const err = new Error();
      err.status = 403;
      err.errors = [{message: 'The resource you are trying to update does not belong to you.'}]
      next(err);
    }

  } else {
    const err = new Error();
    err.status = 404;
    err.errors = [{message: 'The resource you are trying to update does not appear to exist.'}]
    next(err);
  }
}));

/* DELETE Truths */
router.delete('/:id', authenticateUser, asyncHandler( async (req, res, next) => {
  const authenticatedUser = req.currentUser;
  const id = req.params.id;
  console.log(`Getting truth: ${id}`.cyan);
  const truth = await Truth.findByPk(id);

  // If Truth exists, delete it, else pass error to global error handler
  if (truth) {

    // If authed user owns course, delete it, else pass 403 error to global error handler
    if (authenticatedUser.id === truth.userId || authenticatedUser.rank.includes('admin')) {

      // Deleting associated votes
      const votes = await Vote.findAll({where: {truthId: id}}); //console.log('VOTES', votes);
      if (votes) {
        const voteIds = votes.map(v => v.id );
        console.log(`Found ${voteIds.length} related votes to delete`.cyan);
        await Vote.destroy({where: {id: voteIds}});
      }
      
      await truth.destroy();
      console.log(`Deleted truth: ${id}`.green);
      res.status(200).json({success: 'success'});
    } else {
      const err = new Error();
      err.errors = [{message: 'The resource you are trying to delete does not belong to you.'}]
      err.status = 403;
      next(err);
    }

  } else {
    const err = new Error();
    err.errors = [{message: 'The resource you are trying to delete does not appear to exist.'}]
    err.status = 404;
    next(err);
  }
}));

module.exports = router;